const textarea = document.getElementById('userInput');

// 1. 初始化：從儲存空間讀取舊資料
chrome.storage.local.get(['savedText'], (result) => {
  if (result.savedText) {
    textarea.value = result.savedText;
  }
});

// 2. 自動儲存：當使用者輸入時立即寫入儲存空間
textarea.addEventListener('input', () => {
  chrome.storage.local.set({ savedText: textarea.value }, () => {
    console.log('內容已自動儲存');
  });
});

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));