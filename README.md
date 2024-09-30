# Poool Bug Reproduction

- Create `.env` and define `POOOL_APP_ID`
- `npm install` & `npm run dev`

## Case 1

- Empty cash & cookies
- Load `http://localhost:3000` in your browser
- Click on the link to the Tool-Page
- Paywall should be showing
- Fill out Paywall & unlock the content
- The content doesn't switch to the `ContentUnlocked`-component
- (onRelease-event is maybe not firing or not firing in the expected way?)

## Case 2

- Empty cash & cookies
- Load `http://localhost:3000/tools/tool-123` in your browser
- Paywall should be showing & working as intended (including unlocking the content properly)

## Alternative Solution

I tried placing the `PooolProvider`-component on the page-components in `/pages/` instead of the App-root in `app.vue`. This leads to the paywall not being displayed in Case 1.
