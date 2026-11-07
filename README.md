# A little something for you

A responsive, dreamy, Thunderhead-inspired mini website built with plain HTML, CSS and JavaScript.

## Run it
1. Extract the ZIP.
2. Open the `a-little-something` folder in VS Code.
3. Open `index.html` in a browser (double-click works).
4. For a smoother developer workflow, install the VS Code extension **Live Server**, right-click `index.html`, and choose **Open with Live Server**.

No Node.js, Python, database, or API key is needed for this starter version.

## Files
- `index.html` — page structure and content
- `style.css` — layout, colours, responsive styling and animations
- `script.js` — bot interactions, menu and envelope behaviour
- `data/responses.json` — editable copy of the bot's response library; the same responses are embedded in `script.js` for the offline starter version

## Customise before sharing
- Search in `index.html` for `A little something for you` and change the wording if desired.
- Edit the note inside the `#letter` element in `index.html`.
- Add or change bot responses in `responseLibrary` in `script.js` (and keep `data/responses.json` in sync if you want a separate editable reference).
- Change the colour variables at the top of `style.css`.

## About the hybrid bot
The current version uses pre-written responses and works offline. An AI-powered version should be connected through a small backend/serverless function; do not put a private AI API key in `script.js` or any browser-side file.

## Privacy
This starter site does not collect or send visitor information. If you later add analytics, forms, or an AI service, review what data is sent and tell the visitor clearly.
