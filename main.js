;(() => {
    chrome.commands.onCommand.addListener((command) => {
        chrome.tabs.executeScript(null, { file: 'force-scroll.js' }, null);
    });
})();
