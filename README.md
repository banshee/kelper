# Wix Chrome Extension

This is a Chrome extension project scaffolded for integrating with Wix.

## Features
- Manifest v3 setup
- Background script
- Content script for Wix pages
- Popup UI
- Boilerplate for connecting to Wix APIs

## Getting Started
1. Load the extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable Developer mode
   - Click "Load unpacked" and select this folder
2. Click the extension icon to open the popup.
3. Use the popup to connect to Wix or interact with Wix pages.

## File Structure
- `manifest.json`: Chrome extension manifest
- `background.js`: Background service worker
- `content.js`: Injected into Wix pages
- `popup/`: Popup UI files

## Customization
- Add your Wix API logic in `content.js` or `popup/popup.js` as needed.
