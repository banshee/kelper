export default defineContentScript({
  matches: ["<all_urls>"],
  main() {
    console.log("Content script loaded", { id: browser.runtime.id });
    sendOuterHTMLAsMessage();
  },
});

function sendOuterHTMLAsMessage() {
  // Get the entire HTML content of the page
  const htmlContent = document.documentElement.outerHTML;

  // Send it to the background script
  browser.runtime.sendMessage({
    type: "PAGE_HTML",
    payload: htmlContent,
  });
}
