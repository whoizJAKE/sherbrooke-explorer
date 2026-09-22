# Sherbrooke Explorer — progress

Autonomous build log. Phases run in order. Each completed step has a one-line note.

## Phase 0 — GitHub repository

- [x] `gh` installed and authenticated — account `whoizJAKE`
- [x] `git init` in the project root — used the Command Line Tools git, because `/usr/bin/git` is blocked by the Xcode license
- [x] Public repo `sherbrooke-explorer` created (or fallback name noted) — https://github.com/whoizJAKE/sherbrooke-explorer
- [x] `.gitignore` for `node_modules/`, `dist/`, `release/`, `.DS_Store`, large cached OSM dumps — raw Overpass and DEM tiles live in `data/raw/` and are ignored
- [x] `README.md` with description, browser-link placeholder, local dev instructions
- [x] Initial commit pushed to `origin main`

## Phase 1 — Real-world geodata

- [x] Fetch buildings, roads, rivers, parks, POIs from Overpass for bbox N45.44 S45.36 E-71.82 W-71.95 — `overpass-api.de` was busy; `overpass.openstreetmap.fr` served the full bbox in one request per layer
- [x] Parse footprints, floor counts, road classes, both rivers and the confluence, named POIs — see counts below
- [x] Convert lat/lon to local XZ meters — origin is the bbox center (45.40, -71.885); x east, z south, 1 unit = 1 meter
- [x] Cache `data/sherbrooke.geojson` (Git LFS if over ~50MB) — 10.8 MB, no LFS. Runtime pack is `public/world.pack` (1.9 MB) plus `public/world-meta.json`
- [x] Log parsed counts, commit, push

Parsed counts (2026-09-22):

| Layer | Count |
| --- | --- |
| Buildings | 28,173 (37 marked downtown high-rises, 15–25 floors when OSM had no height) |
| Roads | 5,437 |
| Water polygons | 151 |
| Waterway centerlines | 184, including Rivière Magog, Rivière Saint-François, Rivière Massawippi |
| Parks / woods / grass | 690 |
| Trees placed | 38,094 |
| Streetlights placed | 14,224 |
| Chunks | 1,500 (250 m) |
| Named POIs | 11, including the Magog / Saint-François confluence at 45.40608, -71.89032 |

DEM: Mapzen/AWS terrarium tiles, zoom 13, 387×351 samples, elevation 137.8 m to 370.3 m. Micro-relief is added in the client with simplex noise.

Rock Forest's place node (about -71.990) sits just west of the requested bbox. The in-game landmark is on the eastern part of Rock Forest that the bbox actually covers (45.37504, -71.94921).

Floor heights default to 2–8 when OSM has no `building:levels` or `height`. Downtown offices, commercial buildings, and named towers over about 900 m² are raised to 15–25 floors.

## Phase 2 — Terrain and world

- [x] Heightmap terrain (river valleys, downtown hill, rising outskirts) — terrarium DEM plus a small simplex detail; rivers are carved into the mesh
- [x] Extruded building footprints, tinted by type — near chunks use the real footprint; farther chunks use a box of the same footprint bounds
- [x] Roads with sidewalks, lane markings, streetlights — widths follow the highway class; bridges get a flat deck so they stay above the rivers
- [x] Both rivers, animated water, confluence — Magog, Saint-François, and Massawippi, plus the confluence landmark
- [x] Day-night sky with Quebec haze — slow cycle, fog tied to the horizon color
- [x] Instanced vegetation in parks, King's Hill, campus greens, and other mapped green space
- [x] Commit and push

## Phase 3 — Player, vehicles, controls

- [x] Third-person over-the-shoulder camera, first-person toggle (V)
- [x] Capsule-style collider and cannon-es physics — cylinder body, static building boxes from the same footprints
- [x] On foot: WASD, Shift sprint, Space jump, C crouch, mouse orbit. Movement is read from the camera direction.
- [x] Four drivable cars (downtown, Université de Sherbrooke, Bishop's, Rock Forest), arcade handling, F to enter or exit
- [x] Minimap and compass — north is up on the map
- [x] M landmark quick-menu for every Phase 1 POI, including the confluence
- [x] Commit and push — headless control self-test passed for W A S D and the arrow keys (movement, facing, and the nose marker all agreed). A two-second throttle test moved the downtown car 32.4 m.

## Phase 4 — Performance and streaming

- [x] Chunked tiles of 250 m, radius rendering, frustum culling, LOD past about 500 m — full extrusions inside 500 m, instanced boxes from 500 m to 1 km, terrain and main roads farther out
- [x] 60 fps target, F3 overlay (fps, draw calls) — a downtown view draws about 176 calls and 30k triangles. On this Mac the headless frame loop was far above 60 fps. The visible set is small because chunks outside the camera are culled.
- [x] Instanced meshes for trees, lamp posts, and distant buildings
- [x] Commit and push

## Phase 5 — Polish

- [x] Ambient city audio referenced by filename — `public/audio/city-ambient.wav` and `public/audio/rain.wav`. These are synthesized loops (brown noise and a low hum, and filtered noise for rain), not field recordings. The car engine is a live oscillator.
- [x] Landmark discovery layer and on-screen counter — walk within 22 m of a named place. Progress is kept in localStorage.
- [x] Weather toggle: clear / light rain (R) — particles plus wetter roads
- [x] Commit and push

## Phase 3 — Player, vehicles, controls

- [ ] Third-person over-the-shoulder camera, first-person toggle
- [ ] Capsule collider and physics
- [ ] On foot: WASD, Shift sprint, Space jump, C crouch, mouse orbit
- [ ] At least one drivable car, arcade handling, F to enter/exit near spawns
- [ ] Minimap and compass
- [ ] M landmark quick-menu for Phase 1 POIs
- [ ] Commit and push

## Phase 4 — Performance and streaming

- [ ] Chunked tiles about 250m, radius rendering, frustum culling, LOD past about 500m
- [ ] 60fps target, F3 overlay (fps, draw calls)
- [ ] Instanced meshes for repeated elements
- [ ] Commit and push

## Phase 5 — Polish

- [ ] Ambient city audio referenced by filename (placeholders noted)
- [ ] Landmark discovery layer and on-screen counter
- [ ] Weather toggle: clear / light rain
- [ ] Commit and push

## Phase 6 — Native macOS packaging

- [x] electron, electron-builder, concurrently, wait-on — devDependencies, game code untouched by the shell
- [x] `electron/main.js` and `electron/preload.js` per spec — 1440×900, min 1024×640, black background, no menu bar, F11 fullscreen, contextIsolation on, nodeIntegration off
- [x] npm scripts `dev:electron`, `build:web`, `build:mac`
- [x] 1024 icon, `.icns` — stylized skyline, hill, and the two rivers meeting. `iconutil` produced `build/icon.icns`. The packaged app's `CFBundleIconFile` is `icon.icns`.
- [x] `electron-builder.yml` per spec — appId `com.jacobhm.sherbrookeexplorer`, hardenedRuntime true, gatekeeperAssess false, identity null so it stays unsigned. No notarization.
- [x] Gatekeeper workaround in the README — control-click and choose Open
- [x] Verify packaged `.app` and list `.dmg` / `.zip` sizes — the arm64 app launched from `file://` inside the asar, the HUD came up, and an uncapped loop of the real frame function ran at about 1700 fps (about 0.6 ms a frame) with the downtown view on screen. Display refresh will hold it at 60. GPU switches `ignore-gpu-blocklist` and `enable-gpu-rasterization` are on.
- [x] Commit and push source only (no `release/` or `dist/`)

Release artifacts (not in git):

| File | Size |
| --- | --- |
| Sherbrooke Explorer-1.0.0-arm64.dmg | 105.9 MB |
| Sherbrooke Explorer-1.0.0-arm64-mac.zip | 100.7 MB |
| Sherbrooke Explorer-1.0.0.dmg (Intel) | 110.4 MB |
| Sherbrooke Explorer-1.0.0-mac.zip (Intel) | 105.4 MB |

## Phase 7 — Public browser deployment

- [ ] GitHub Actions workflow deploys `dist/` to GitHub Pages
- [ ] Vite `base` correct for the Pages subpath
- [ ] Pages enabled on the repo
- [ ] Live URL confirmed playable
- [ ] README link updated, commit, push

## Phase 8 — Final report

- [ ] Summary at the top of this file and in the README
- [ ] Counts, performance, URLs, commands, limitations, next steps
- [ ] Pushed

## Notes

- Git binary: `/Library/Developer/CommandLineTools/usr/bin/git` (`/usr/bin/git` is blocked by an unaccepted Xcode license).
- GitHub account: `whoizJAKE`.
- Local commits use `user.name=Jacob` and the GitHub noreply email, set on this repo only.
