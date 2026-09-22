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

- [ ] Heightmap terrain (river valleys, downtown hill, rising outskirts)
- [ ] Extruded building footprints, tinted by type
- [ ] Roads with sidewalks, lane markings, streetlights
- [ ] Both rivers, animated water, confluence
- [ ] Day-night sky with Quebec haze
- [ ] Instanced vegetation in parks, King's Hill, campuses
- [ ] Commit and push

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

- [ ] electron, electron-builder, concurrently, wait-on
- [ ] `electron/main.js` and `electron/preload.js` per spec
- [ ] npm scripts `dev:electron`, `build:web`, `build:mac`
- [ ] 1024 icon, `.icns`
- [ ] `electron-builder.yml` per spec, unsigned, no notarization
- [ ] Gatekeeper workaround in the README
- [ ] Verify packaged `.app` and list `.dmg` / `.zip` sizes
- [ ] Commit and push source only (no `release/` or `dist/`)

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
