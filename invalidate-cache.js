browser.browserAction.onClicked.addListener(function (tab) {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(function (tabs, error) {
        var browserUrl = tabs[0].url;
        var requestUrl = browserUrl.split('/').slice(0, 3).join('/') + '/Cache.axd?Message=InvalidateAll&d=' + (new Date()).valueOf();

        var request = new XMLHttpRequest();
        request.open('GET', requestUrl, false);
        request.send(null);

        browser.tabs.reload(tab.id, {
            bypassCache: true
        });
    });
});