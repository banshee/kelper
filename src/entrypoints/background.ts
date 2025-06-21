const llamaKey = import.meta.env.VITE_LLAMA_API_KEY;

export default defineBackground(() => {
  console.log("Background script loaded", {
    id: browser.runtime.id,
    vk: llamaKey.slice(0, 4) + "..." + llamaKey.slice(-4),
  });
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PAGE_HTML") {
    const payload = message.payload;
    console.log("Received HTML from content script");
  }
});
