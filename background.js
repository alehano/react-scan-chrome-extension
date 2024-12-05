let isEnabled = false;

const SCRIPT_ID = "react-scanner";

chrome.action.onClicked.addListener(async (tab) => {
  isEnabled = !isEnabled;

  if (isEnabled) {
    // Register the content script
    await chrome.scripting.registerContentScripts([
      {
        id: SCRIPT_ID,
        matches: ["<all_urls>"],
        js: ["inject.js"],
        runAt: "document_start",
        world: "MAIN",
      },
    ]);

    chrome.action.setIcon({
      path: {
        16: "icon16-active.png",
        48: "icon48-active.png",
        128: "icon128-active.png",
      },
    });
  } else {
    // Unregister the content script
    await chrome.scripting.unregisterContentScripts({
      ids: [SCRIPT_ID],
    });

    chrome.action.setIcon({
      path: {
        16: "icon16.png",
        48: "icon48.png",
        128: "icon128.png",
      },
    });
  }

  // Reload the page after toggling
  chrome.tabs.reload(tab.id);
});
