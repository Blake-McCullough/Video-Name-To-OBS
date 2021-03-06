// function that injects code to a specific tab
function injectScript(tabId) {

    chrome.scripting.executeScript(
        {
            target: { tabId: tabId },
            files: ['inject.js'],
        }
    );

}
function sended(id) {
    try {
        if (id.startsWith("https://music.youtube.com/watch")) {
            url = 'http://localhost/fetchvid?id=' + id;
            fetch(url);
        }
        else if (id.startsWith("https://youtube.com/watch")) {  
            url = 'http://localhost/fetchvid?id=' + id;
            fetch(url);
        } 

        
    } catch { console.log("An error occured :Awkward:") }
}

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    // check for a URL in the changeInfo parameter (url is only added when it is changed)
    if (changeInfo.url) {


        // calls the inject function
        sended(changeInfo.url);

    }
});