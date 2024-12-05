# React Scan Extension

A Chrome extension that allows you to easily toggle [React Scan](https://github.com/aidenybai/react-scan) on any webpage. React Scan is a powerful tool that automatically detects performance issues in your React app.

## What is React Scan?

[React Scan](https://github.com/aidenybai/react-scan) is a tool created by [Aiden Bai](https://github.com/aidenybai) that helps you identify performance issues in React applications by:

- Requiring no code changes – just drop it in
- Highlighting exactly the components you need to optimize
- Providing visual cues for unnecessary renders

## How to Use

1. Install the extension
2. Navigate to any React website
3. Click the extension icon to enable React Scan
4. Click again to disable it

The extension will automatically inject React Scan at document start, ensuring proper initialization before your React application loads.

## Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Files

- `manifest.json` - Extension configuration
- `background.js` - Handles extension toggle logic
- `inject.js` - Injects React Scan script into the page
- Icons (you'll need to add these):
  - `icon16.png`
  - `icon48.png`
  - `icon128.png`
  - `icon16-active.png`
  - `icon48-active.png`
  - `icon128-active.png`

## Credits

This extension is just a wrapper around the excellent [React Scan](https://github.com/aidenybai/react-scan) tool by Aiden Bai. All credit for the core functionality goes to the original project and its contributors.

## License

MIT License - feel free to use this extension as you wish.
