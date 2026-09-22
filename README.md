# Sherbrooke Explorer

A 3D explorable reconstruction of Sherbrooke, Québec you can walk or drive around. The city is built from OpenStreetMap footprints and roads at roughly 1:1 scale, covering downtown, Lennoxville, the Université de Sherbrooke and Bishop's University campuses, and Rock Forest, with both the Magog and Saint-François rivers and their confluence.

This repository is the full source. A browser build is deployed with GitHub Pages, and the same project packages as a native macOS app.

## Play in your browser

https://jacobhmaiddout.com/sherbrooke-explorer/

The same address is where https://whoizjake.github.io/sherbrooke-explorer/ sends you. Map data is loaded from that site, so you can walk and drive without installing anything.

## Play it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (http://localhost:5173). Click the view to capture the mouse.

You start on downtown Rue King, near the Monument aux Braves. Press M to jump to the cathedral, the Granada, the market, both universities, the Jacques-Cartier bridge, Lennoxville, Rock Forest, or the river confluence. Walk up to a landmark to mark it found. A red car is parked beside the spawn point; press F to drive. Three more cars wait at the campuses and in Rock Forest.

| Key | Action |
| --- | --- |
| W A S D | Walk, or steer / throttle in a car |
| Shift | Sprint |
| Space | Jump, or handbrake in a car |
| C | Crouch |
| F | Enter or exit a car when you are next to one |
| V | Toggle third person / first person |
| M | Landmark quick-menu |
| R | Toggle clear weather / light rain |
| F3 | Debug overlay (fps, draw calls) |
| Esc | Release the mouse |

## Native macOS app

The app is unsigned. macOS Gatekeeper will refuse a normal double-click the first time.

1. Open `release/` and drag **Sherbrooke Explorer** to Applications, or open the `.dmg` and drag it across.
2. Control-click (or right-click) the app and choose **Open**.
3. Confirm **Open** in the dialog. macOS remembers that choice afterwards.

Build it from a clean checkout:

```bash
npm install
npm run build:mac
```

That writes a `.dmg` and a `.zip` for both Apple silicon and Intel into `release/`. Those archives are build output and are not stored in git.

To run the shell with hot reload instead of a packaged app:

```bash
npm run dev:electron
```

F11 toggles fullscreen. There is no browser menu bar.

The public site is the `gh-pages` branch. `npm run build:web` writes a new `dist/`. An Actions workflow that would publish `dist/` on every push to `main` is saved at `.github/workflows/deploy.yml`. Publishing that file needs a GitHub token with the `workflow` scope (`gh auth refresh -h github.com -s workflow`). Until then, update the site by replacing the files on `gh-pages`.

Map data © OpenStreetMap contributors, available under the Open Database License.

## License

Source code in this repository is released under the MIT License. OpenStreetMap data remains under the ODbL and is not relicensed.
