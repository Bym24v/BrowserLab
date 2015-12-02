var viewTabId = 0;

chrome.browserAction.onClicked.addListener(function() {
    var n = chrome.extension.getURL("index.html");
    if (viewTabId != 0) try {
        chrome.tabs.remove(viewTabId, function() {})
    } catch (t) {
        console.log(t)
    }
    chrome.tabs.create({
        url: n
    })
});
