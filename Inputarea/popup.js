document.getElementById('saveBtn').addEventListener('click', () => {
    const text = document.getElementById('userInput').value;
    console.log('使用者輸入：', text);
    alert('已儲存內容：' + text);
  });