# Sherbrooke Explorer — progress

Autonomous build log. Phases run in order. Each completed step has a one-line note.

## Phase 0 — GitHub repository

- [ ] `gh` installed and authenticated
- [ ] `git init` in the project root
- [ ] Public repo `sherbrooke-explorer` created (or fallback name noted)
- [ ] `.gitignore` for `node_modules/`, `dist/`, `release/`, `.DS_Store`, large cached OSM dumps
- [ ] `README.md` with description, browser-link placeholder, local dev instructions
- [ ] Initial commit pushed to `origin main`

## Phase 1 — Real-world geodata

- [ ] Fetch buildings, roads, rivers, parks, POIs from Overpass for bbox N45.44 S45.36 E-71.82 W-71.95
- [ ] Parse footprints, floor counts, road classes, both rivers and the confluence, named POIs
- [ ] Convert lat/lon to local XZ meters
- [ ] Cache `data/sherbrooke.geojson` (Git LFS if over ~50MB)
- [ ] Log parsed counts, commit, push

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
