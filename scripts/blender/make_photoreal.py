# Original photoreal textures for Sherbrooke Explorer.
# Rendered in Blender from procedural materials and modelled window recesses.
# No photos, game assets, or street-level imagery.
#
#   blender --background --python scripts/blender/make_photoreal.py -- public/textures

import array
import math
import os
import random
import sys

import bpy
from mathutils import Vector

_ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else [os.path.abspath('public/textures')]
OUT = _ARGS[0]
STAGES = set(_ARGS[1:] or ['sky', 'facades', 'ground', 'trees'])
os.makedirs(OUT, exist_ok=True)


def engines():
    prop = bpy.types.RenderSettings.bl_rna.properties['engine']
    return [item.identifier for item in prop.enum_items]


def use_cycles_gpu():
    # Metal kernel compile crashes in this headless layout (nil cache path).
    # M4 CPU Cycles is fast enough for these small bakes.
    scene = bpy.context.scene
    scene.render.engine = 'CYCLES'
    scene.cycles.device = 'CPU'
    scene.cycles.samples = 16
    scene.cycles.use_denoising = False
    try:
        scene.view_settings.view_transform = 'Standard'
    except Exception:
        pass


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    use_cycles_gpu()


def save_image(image, name, tile=0):
    path = os.path.join(OUT, name)
    if tile:
        make_tileable(image, tile)
    image.filepath_raw = path
    image.file_format = 'PNG'
    image.save()
    print('wrote', path)


def make_tileable(image, feather):
    w, h = image.size
    buf = array.array('f', [0.0]) * (w * h * 4)
    image.pixels.foreach_get(buf)

    def blend_edge(horizontal):
        limit = w if horizontal else h
        span = min(feather, limit // 4)
        for i in range(span):
            t = i / span
            s = t * t * (3 - 2 * t)
            if horizontal:
                for y in range(h):
                    a = (y * w + i) * 4
                    b = (y * w + (w - 1 - i)) * 4
                    for c in range(4):
                        avg = buf[a + c] * (1 - s) + buf[b + c] * s
                        # Keep the centre and fade the seam toward the average of both edges.
                        buf[a + c] = buf[a + c] * s + avg * (1 - s)
                        buf[b + c] = buf[b + c] * s + avg * (1 - s)
            else:
                for x in range(w):
                    a = (i * w + x) * 4
                    b = ((h - 1 - i) * w + x) * 4
                    for c in range(4):
                        avg = buf[a + c] * (1 - s) + buf[b + c] * s
                        buf[a + c] = buf[a + c] * s + avg * (1 - s)
                        buf[b + c] = buf[b + c] * s + avg * (1 - s)

    blend_edge(True)
    blend_edge(False)
    image.pixels.foreach_set(buf)


def bake_target(name, w, h, colorspace):
    image = bpy.data.images.new(name, w, h, alpha=False, float_buffer=False)
    image.colorspace_settings.name = colorspace
    mat = bpy.data.materials.new(name + '_target')
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    tex = nodes.new('ShaderNodeTexImage')
    tex.image = image
    nodes.active = tex
    return image, mat, tex


def activate_image(mat, image):
    nodes = mat.node_tree.nodes
    tex = None
    for node in nodes:
        if node.type == 'TEX_IMAGE':
            tex = node
            break
    tex.image = image
    nodes.active = tex


def cube(name, loc, dims):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    obj = bpy.context.active_object
    obj.name = name
    obj.dimensions = dims
    bpy.ops.object.transform_apply(scale=True)
    return obj


def principled(name, color, roughness, metallic=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Roughness'].default_value = roughness
    bsdf.inputs['Metallic'].default_value = metallic
    return mat


def brick_material(name, color_a, color_b, mortar, scale, roughness):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    nodes = nt.nodes
    links = nt.links
    bsdf = nodes.get('Principled BSDF')
    brick = nodes.new('ShaderNodeTexBrick')
    brick.inputs['Scale'].default_value = scale
    brick.inputs['Color1'].default_value = (*color_a, 1)
    brick.inputs['Color2'].default_value = (*color_b, 1)
    brick.inputs['Mortar'].default_value = (*mortar, 1)
    brick.inputs['Mortar Size'].default_value = 0.015
    brick.inputs['Mortar Smooth'].default_value = 0.05
    brick.inputs['Brick Width'].default_value = 0.24
    brick.inputs['Row Height'].default_value = 0.07
    noise = nodes.new('ShaderNodeTexNoise')
    noise.inputs['Scale'].default_value = 4.5
    noise.inputs['Detail'].default_value = 6
    links.new(brick.outputs['Color'], bsdf.inputs['Base Color'])
    noise.inputs['Scale'].default_value = scale * 0.15
    bump = nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.28
    links.new(brick.outputs['Fac'], bump.inputs['Height'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    bsdf.inputs['Roughness'].default_value = roughness
    return mat


def link(obj, mat):
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)


def build_facade(kind):
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    width, height = 15.0, 13.0
    if kind == 'glass':
        bays, floors = 8, 8
        wall_mat = principled('mullion', (0.72, 0.75, 0.78), 0.35, 0.85)
        opening = (0.78, 0.82)
    elif kind == 'stone':
        bays, floors = 3, 3
        wall_mat = brick_material('stone', (0.72, 0.70, 0.64), (0.62, 0.60, 0.55), (0.48, 0.46, 0.42), 8, 0.8)
        opening = (0.42, 0.55)
    else:
        bays, floors = 5, 4
        wall_mat = brick_material('brick', (0.45, 0.18, 0.13), (0.32, 0.12, 0.09), (0.72, 0.68, 0.62), 14, 0.86)
        opening = (0.46, 0.52)
    wall = cube('wall', (0, 0, -0.16), (width, height, 0.32))
    link(wall, wall_mat)
    cutters = []
    windows = []
    bay_w = width / bays
    floor_h = height / floors
    for by in range(floors):
        for bx in range(bays):
            cx = -width / 2 + (bx + 0.5) * bay_w
            cy = -height / 2 + (by + 0.48) * floor_h
            ww = bay_w * opening[0]
            wh = floor_h * opening[1]
            cutter = cube(f'cut_{bx}_{by}', (cx, cy, 0.02), (ww, wh, 0.5))
            cutters.append(cutter)
            windows.append((cx, cy, ww, wh))
    bpy.ops.object.select_all(action='DESELECT')
    for cutter in cutters:
        cutter.select_set(True)
    bpy.context.view_layer.objects.active = cutters[0]
    bpy.ops.object.join()
    joined = bpy.context.active_object
    bool_mod = wall.modifiers.new('holes', 'BOOLEAN')
    bool_mod.operation = 'DIFFERENCE'
    bool_mod.solver = 'EXACT'
    bool_mod.object = joined
    bpy.context.view_layer.objects.active = wall
    bpy.ops.object.modifier_apply(modifier=bool_mod.name)
    bpy.data.objects.remove(joined, do_unlink=True)
    glass = principled('glass', (0.16, 0.22, 0.26) if kind != 'glass' else (0.45, 0.58, 0.66), 0.08 if kind == 'glass' else 0.12, 0.15 if kind != 'glass' else 0.55)
    frame_mat = principled('frame', (0.86, 0.84, 0.80) if kind != 'glass' else (0.75, 0.78, 0.80), 0.4, 0.2 if kind != 'glass' else 0.8)
    high = [wall]
    for cx, cy, ww, wh in windows:
        pane = cube('pane', (cx, cy, -0.12), (ww * 0.9, wh * 0.9, 0.01))
        link(pane, glass)
        high.append(pane)
        depth = 0.045
        z = -0.015
        high.append(cube('ft', (cx, cy + wh * 0.45, z), (ww, 0.06, depth)))
        high.append(cube('fb', (cx, cy - wh * 0.45, z), (ww, 0.07, depth)))
        high.append(cube('fl', (cx - ww * 0.45, cy, z), (0.06, wh, depth)))
        high.append(cube('fr', (cx + ww * 0.45, cy, z), (0.06, wh, depth)))
        for obj in high[-4:]:
            link(obj, frame_mat)
        if kind != 'glass':
            sill = cube('sill', (cx, cy - wh * 0.52, 0.015), (ww * 1.08, 0.08, 0.05))
            link(sill, frame_mat)
            high.append(sill)
    plane = cube('bake', (0, 0, 0.0), (width, height, 0.002))
    # A cube has no useful UV. Replace it with a real plane.
    bpy.data.objects.remove(plane, do_unlink=True)
    bpy.ops.mesh.primitive_plane_add(size=1, location=(0, 0, 0))
    plane = bpy.context.active_object
    plane.name = 'bake'
    plane.dimensions = (width, height, 0)
    bpy.ops.object.transform_apply(scale=True)
    return high, plane, windows, bays, floors, width, height


def bake_set(high, plane, res, prefix):
    scene = bpy.context.scene
    scene.render.bake.use_selected_to_active = True
    scene.render.bake.cage_extrusion = 0.08
    scene.render.bake.max_ray_distance = 0.45
    scene.render.bake.margin = 12
    scene.render.bake.use_clear = True
    scene.cycles.samples = 12
    image_n, mat, _tex = bake_target(prefix + '_n', res, res, 'Non-Color')
    image_a, _mat_a, _ = bake_target(prefix + '_a', res, res, 'Non-Color')
    image_c, _mat_c, _ = bake_target(prefix + '_c', res, res, 'sRGB')
    plane.data.materials.append(mat)
    bpy.ops.object.select_all(action='DESELECT')
    for obj in high:
        obj.select_set(True)
    plane.select_set(True)
    bpy.context.view_layer.objects.active = plane

    def shoot(image, bake_type, extra=None):
        activate_image(mat, image)
        if extra:
            extra()
        print('baking', prefix, bake_type)
        bpy.ops.object.bake(type=bake_type)

    shoot(image_n, 'NORMAL')
    shoot(image_a, 'AO')
    scene.render.bake.use_pass_direct = False
    scene.render.bake.use_pass_indirect = False
    scene.render.bake.use_pass_color = True
    shoot(image_c, 'DIFFUSE')
    save_image(image_c, f'{prefix}.png')
    save_image(image_n, f'{prefix}-normal.png')
    save_image(image_a, f'{prefix}-ao.png')


def write_lights(name, bays, floors, opening, res=1024):
    image = bpy.data.images.new(name, res, res, alpha=False)
    image.colorspace_settings.name = 'sRGB'
    buf = array.array('f', [0.0]) * (res * res * 4)
    rng = random.Random(name)
    ow, oh = opening
    for by in range(floors):
        for bx in range(bays):
            if rng.random() < 0.38:
                continue
            x0 = int((bx + 0.5 - ow / 2) / bays * res)
            x1 = int((bx + 0.5 + ow / 2) / bays * res)
            y0 = int((by + 0.48 - oh / 2) / floors * res)
            y1 = int((by + 0.48 + oh / 2) / floors * res)
            warmth = 0.75 + rng.random() * 0.25
            for y in range(max(0, y0), min(res, y1)):
                for x in range(max(0, x0), min(res, x1)):
                    i = (y * res + x) * 4
                    buf[i] = warmth
                    buf[i + 1] = warmth * 0.82
                    buf[i + 2] = warmth * 0.55
                    buf[i + 3] = 1
    image.pixels.foreach_set(buf)
    save_image(image, name)


def shader_plane(mat, res, prefix):
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    bpy.ops.mesh.primitive_plane_add(size=2, location=(0, 0, 0))
    plane = bpy.context.active_object
    image_c, target, _ = bake_target(prefix + '_c', res, res, 'sRGB')
    image_n = bpy.data.images.new(prefix + '_n', res, res)
    image_n.colorspace_settings.name = 'Non-Color'
    image_r = bpy.data.images.new(prefix + '_r', res, res)
    image_r.colorspace_settings.name = 'Non-Color'
    plane.data.materials.append(target)
    # Put the source shader on a second material slot? Bake reads the active material.
    # Swap: the plane uses the source material, and the image node is added into it.
    plane.data.materials[0] = mat
    nodes = mat.node_tree.nodes
    tex = nodes.new('ShaderNodeTexImage')
    tex.image = image_c
    nodes.active = tex
    scene = bpy.context.scene
    scene.render.bake.use_selected_to_active = False
    scene.render.bake.margin = 8
    scene.cycles.samples = 16
    bpy.ops.object.select_all(action='DESELECT')
    plane.select_set(True)
    bpy.context.view_layer.objects.active = plane
    scene.render.bake.use_pass_direct = False
    scene.render.bake.use_pass_indirect = False
    scene.render.bake.use_pass_color = True
    print('baking shader', prefix, 'DIFFUSE')
    bpy.ops.object.bake(type='DIFFUSE')
    tex.image = image_n
    print('baking shader', prefix, 'NORMAL')
    bpy.ops.object.bake(type='NORMAL')
    tex.image = image_r
    print('baking shader', prefix, 'ROUGHNESS')
    bpy.ops.object.bake(type='ROUGHNESS')
    save_image(image_c, f'{prefix}.png', tile=48)
    save_image(image_n, f'{prefix}-normal.png', tile=48)
    save_image(image_r, f'{prefix}-rough.png', tile=48)


def noise_shader(prefix, builder):
    mat = bpy.data.materials.new(prefix)
    mat.use_nodes = True
    builder(mat)
    shader_plane(mat, 1024, prefix)


def build_asphalt(mat):
    nt = mat.node_tree
    nodes = nt.nodes
    links = nt.links
    bsdf = nodes.get('Principled BSDF')
    coord = nodes.new('ShaderNodeTexCoord')
    noise = nodes.new('ShaderNodeTexNoise')
    noise.inputs['Scale'].default_value = 180
    noise.inputs['Detail'].default_value = 12
    noise.inputs['Roughness'].default_value = 0.55
    stones = nodes.new('ShaderNodeTexVoronoi')
    stones.inputs['Scale'].default_value = 260
    patches = nodes.new('ShaderNodeTexNoise')
    patches.inputs['Scale'].default_value = 7
    patches.inputs['Detail'].default_value = 4
    mix = nodes.new('ShaderNodeMix')
    mix.data_type = 'RGBA'
    links.new(patches.outputs['Fac'], mix.inputs['Factor'])
    mix.inputs['A'].default_value = (0.045, 0.046, 0.048, 1)
    mix.inputs['B'].default_value = (0.09, 0.09, 0.092, 1)
    mix2 = nodes.new('ShaderNodeMix')
    mix2.data_type = 'RGBA'
    links.new(noise.outputs['Fac'], mix2.inputs['Factor'])
    links.new(mix.outputs['Result'], mix2.inputs['A'])
    mix2.inputs['B'].default_value = (0.16, 0.155, 0.145, 1)
    links.new(coord.outputs['UV'], noise.inputs['Vector'])
    links.new(coord.outputs['UV'], stones.inputs['Vector'])
    links.new(coord.outputs['UV'], patches.inputs['Vector'])
    links.new(mix2.outputs['Result'], bsdf.inputs['Base Color'])
    bump = nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.18
    links.new(noise.outputs['Fac'], bump.inputs['Height'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    ramp_r = nodes.new('ShaderNodeMapRange')
    links.new(patches.outputs['Fac'], ramp_r.inputs['Value'])
    ramp_r.inputs['To Min'].default_value = 0.55
    ramp_r.inputs['To Max'].default_value = 0.92
    links.new(ramp_r.outputs['Result'], bsdf.inputs['Roughness'])


def build_concrete(mat):
    nt = mat.node_tree
    nodes = nt.nodes
    links = nt.links
    bsdf = nodes.get('Principled BSDF')
    brick = nodes.new('ShaderNodeTexBrick')
    brick.inputs['Scale'].default_value = 2.2
    brick.inputs['Color1'].default_value = (0.62, 0.61, 0.58, 1)
    brick.inputs['Color2'].default_value = (0.55, 0.54, 0.51, 1)
    brick.inputs['Mortar'].default_value = (0.42, 0.41, 0.39, 1)
    brick.inputs['Mortar Size'].default_value = 0.02
    brick.inputs['Brick Width'].default_value = 0.9
    brick.inputs['Row Height'].default_value = 0.7
    noise = nodes.new('ShaderNodeTexNoise')
    noise.inputs['Scale'].default_value = 40
    noise.inputs['Detail'].default_value = 8
    mix = nodes.new('ShaderNodeMix')
    mix.data_type = 'RGBA'
    mix.inputs['Factor'].default_value = 0.25
    links.new(brick.outputs['Color'], mix.inputs['A'])
    links.new(noise.outputs['Color'], mix.inputs['B'])
    links.new(mix.outputs['Result'], bsdf.inputs['Base Color'])
    bump = nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.22
    links.new(brick.outputs['Fac'], bump.inputs['Height'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    bsdf.inputs['Roughness'].default_value = 0.9


def build_grass(mat):
    nt = mat.node_tree
    nodes = nt.nodes
    links = nt.links
    bsdf = nodes.get('Principled BSDF')
    coord = nodes.new('ShaderNodeTexCoord')
    n1 = nodes.new('ShaderNodeTexNoise')
    n1.inputs['Scale'].default_value = 28
    n1.inputs['Detail'].default_value = 14
    n2 = nodes.new('ShaderNodeTexNoise')
    n2.inputs['Scale'].default_value = 6
    n2.inputs['Detail'].default_value = 3
    wave = nodes.new('ShaderNodeTexWave')
    wave.inputs['Scale'].default_value = 90
    wave.inputs['Distortion'].default_value = 8
    wave.bands_direction = 'Y'
    links.new(coord.outputs['UV'], n1.inputs['Vector'])
    links.new(coord.outputs['UV'], n2.inputs['Vector'])
    links.new(coord.outputs['UV'], wave.inputs['Vector'])
    mix = nodes.new('ShaderNodeMix')
    mix.data_type = 'RGBA'
    links.new(n2.outputs['Fac'], mix.inputs['Factor'])
    mix.inputs['A'].default_value = (0.16, 0.28, 0.10, 1)
    mix.inputs['B'].default_value = (0.28, 0.36, 0.12, 1)
    links.new(mix.outputs['Result'], bsdf.inputs['Base Color'])
    bump = nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.45
    add = nodes.new('ShaderNodeMix')
    add.data_type = 'FLOAT'
    add.inputs['Factor'].default_value = 0.65
    links.new(n1.outputs['Fac'], add.inputs['A'])
    links.new(wave.outputs['Fac'], add.inputs['B'])
    links.new(add.outputs['Result'], bump.inputs['Height'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    bsdf.inputs['Roughness'].default_value = 0.92


def build_roof(mat):
    nt = mat.node_tree
    nodes = nt.nodes
    links = nt.links
    bsdf = nodes.get('Principled BSDF')
    brick = nodes.new('ShaderNodeTexBrick')
    brick.inputs['Scale'].default_value = 18
    brick.inputs['Color1'].default_value = (0.22, 0.18, 0.16, 1)
    brick.inputs['Color2'].default_value = (0.16, 0.13, 0.12, 1)
    brick.inputs['Mortar'].default_value = (0.10, 0.09, 0.08, 1)
    brick.inputs['Mortar Size'].default_value = 0.02
    brick.inputs['Brick Width'].default_value = 0.32
    brick.inputs['Row Height'].default_value = 0.12
    links.new(brick.outputs['Color'], bsdf.inputs['Base Color'])
    bump = nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.4
    links.new(brick.outputs['Fac'], bump.inputs['Height'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    bsdf.inputs['Roughness'].default_value = 0.86


def render_sky():
    scene = bpy.context.scene
    world = bpy.data.worlds.new('Sky')
    scene.world = world
    world.use_nodes = True
    nt = world.node_tree
    nt.nodes.clear()
    out = nt.nodes.new('ShaderNodeOutputWorld')
    bg = nt.nodes.new('ShaderNodeBackground')
    sky = nt.nodes.new('ShaderNodeTexSky')
    sky.sky_type = 'NISHITA'
    sky.sun_elevation = math.radians(42)
    sky.sun_rotation = math.radians(28)
    sky.altitude = 180
    sky.air_density = 1
    sky.dust_density = 0.4
    nt.links.new(sky.outputs['Color'], bg.inputs['Color'])
    nt.links.new(bg.outputs['Background'], out.inputs['Surface'])
    bg.inputs['Strength'].default_value = 1
    bpy.ops.object.camera_add(location=(0, 0, 0))
    cam = bpy.context.active_object
    cam.data.type = 'PANO'
    cam.data.panorama_type = 'EQUIRECTANGULAR'
    scene.camera = cam
    scene.cycles.samples = 8
    scene.render.resolution_x = 1024
    scene.render.resolution_y = 512
    scene.render.image_settings.file_format = 'HDR'
    scene.render.filepath = os.path.join(OUT, 'sky.hdr')
    print('rendering sky')
    bpy.ops.render.render(write_still=True)


def leaf_image(autumn=False):
    res = 64
    image = bpy.data.images.new('leaf', res, res, alpha=True)
    buf = array.array('f', [0.0]) * (res * res * 4)
    for y in range(res):
        for x in range(res):
            u = (x + 0.5) / res * 2 - 1
            v = (y + 0.5) / res * 2 - 1
            d = u * u * 1.4 + v * v * 0.7
            if d > 1:
                continue
            edge = max(0, 1 - d)
            if autumn:
                r, g, b = 0.75, 0.32, 0.08
            else:
                r, g, b = 0.12, 0.32 + edge * 0.15, 0.08
            i = (y * res + x) * 4
            buf[i] = r
            buf[i + 1] = g
            buf[i + 2] = b
            buf[i + 3] = 1 if d < 0.85 else (1 - d) / 0.15
    image.pixels.foreach_set(buf)
    image.pack()
    return image


def render_tree(kind):
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    scene = bpy.context.scene
    names = engines()
    scene.render.engine = 'BLENDER_EEVEE_NEXT' if 'BLENDER_EEVEE_NEXT' in names else 'CYCLES'
    scene.render.film_transparent = True
    scene.render.resolution_x = 768
    scene.render.resolution_y = 1024
    scene.render.image_settings.file_format = 'PNG'
    scene.render.image_settings.color_mode = 'RGBA'
    if scene.render.engine == 'CYCLES':
        scene.cycles.samples = 32
        scene.cycles.use_denoising = True
    else:
        scene.eevee.taa_render_samples = 16
    autumn = kind == 'autumn'
    leaves = leaf_image(autumn)
    mat = bpy.data.materials.new('leaves_' + kind)
    mat.use_nodes = True
    mat.blend_method = 'HASHED'
    nt = mat.node_tree
    bsdf = nt.nodes.get('Principled BSDF')
    tex = nt.nodes.new('ShaderNodeTexImage')
    tex.image = leaves
    nt.links.new(tex.outputs['Color'], bsdf.inputs['Base Color'])
    nt.links.new(tex.outputs['Alpha'], bsdf.inputs['Alpha'])
    bark = principled('bark', (0.28, 0.18, 0.10), 0.8)
    bpy.ops.mesh.primitive_cylinder_add(radius=0.16, depth=2.2, location=(0, 0, 1.1))
    trunk = bpy.context.active_object
    link(trunk, bark)
    rng = random.Random(kind)
    count = 420 if kind == 'pine' else 900
    for i in range(count):
        bpy.ops.mesh.primitive_plane_add(size=0.22 if kind != 'pine' else 0.28, location=(0, 0, 0))
        leaf = bpy.context.active_object
        if kind == 'pine':
            h = rng.random()
            radius = (1 - h) * 1.7 * math.sqrt(rng.random())
            ang = rng.random() * math.tau
            leaf.location = (math.cos(ang) * radius, math.sin(ang) * radius, 1.3 + h * 3.4)
        else:
            # Rejection sample inside an ellipsoid canopy.
            while True:
                p = Vector((rng.uniform(-1, 1), rng.uniform(-1, 1), rng.uniform(-1, 1)))
                if (p.x / 1.5) ** 2 + (p.y / 1.5) ** 2 + (p.z / 1.15) ** 2 <= 1:
                    break
            leaf.location = (p.x * 1.15, p.y * 1.15, 2.35 + p.z * 1.15)
        leaf.rotation_euler = (rng.random() * math.tau, rng.random() * math.tau, rng.random() * math.tau)
        link(leaf, mat)
    bpy.ops.object.light_add(type='SUN', location=(4, -2, 8))
    sun = bpy.context.active_object
    sun.data.energy = 4.5
    sun.rotation_euler = (math.radians(50), 0, math.radians(35))
    bpy.ops.object.empty_add(location=(0, 0, 2.3))
    target = bpy.context.active_object
    bpy.ops.object.camera_add(location=(0.2, -7.2, 2.15))
    cam = bpy.context.active_object
    cam.data.type = 'ORTHO'
    cam.data.ortho_scale = 6.4 if kind != 'pine' else 5.4
    track = cam.constraints.new('TRACK_TO')
    track.target = target
    track.track_axis = 'TRACK_NEGATIVE_Z'
    track.up_axis = 'UP_Y'
    scene.camera = cam
    if scene.world is None:
        scene.world = bpy.data.worlds.new('TreeSky')
    scene.world.use_nodes = True
    bg = scene.world.node_tree.nodes.get('Background')
    if bg:
        bg.inputs['Strength'].default_value = 0.35
        bg.inputs['Color'].default_value = (0.62, 0.72, 0.82, 1)
    filename = {'maple': 'tree-maple.png', 'autumn': 'tree-autumn.png', 'pine': 'tree-pine.png'}[kind]
    scene.render.filepath = os.path.join(OUT, filename)
    print('rendering', filename)
    bpy.ops.render.render(write_still=True)


def main():
    print('output', OUT, 'stages', STAGES)
    if 'sky' in STAGES:
        reset()
        render_sky()
    if 'facades' in STAGES:
        for kind, opening in (('brick', (0.46, 0.52)), ('stone', (0.42, 0.55)), ('glass', (0.78, 0.82))):
            reset()
            high, plane, _windows, bays, floors, _w, _h = build_facade(kind)
            bake_set(high, plane, 1024, kind)
            write_lights(f'{kind}-lights.png', bays, floors, opening)
    if 'ground' in STAGES:
        reset()
        noise_shader('asphalt', build_asphalt)
        reset()
        noise_shader('concrete', build_concrete)
        reset()
        noise_shader('grass', build_grass)
        reset()
        noise_shader('roof', build_roof)
    if 'trees' in STAGES:
        for kind in ('maple', 'autumn', 'pine'):
            reset()
            render_tree(kind)
    print('photoreal textures done')


if __name__ == '__main__':
    main()
