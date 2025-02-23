document.getElementById('shorten-btn').addEventListener('click', () => {
    const urlInput = document.getElementById('url-input').value.trim();
    const errorMessage = document.getElementById('error-message');
    const shortenedUrlSection = document.getElementById('shortened-url');
    const resultLink = document.getElementById('result-link');
    const historyList = document.getElementById('history-list');
  
    if (!isValidUrl(urlInput)) {
      errorMessage.classList.remove('hidden');
      shortenedUrlSection.classList.add('hidden');
      return;
    }
  
    errorMessage.classList.add('hidden');
  
    // Simulate URL shortening
    const shortenedUrl = `https://short.url/${Math.random().toString(36).substring(2, 8)}`;
    resultLink.href = shortenedUrl;
    resultLink.textContent = shortenedUrl;
    shortenedUrlSection.classList.remove('hidden');
  
    // Add to history
    const historyItem = document.createElement('li');
    historyItem.textContent = `${urlInput} → ${shortenedUrl}`;
    historyList.prepend(historyItem);
  });
  
  document.getElementById('copy-btn').addEventListener('click', () => {
    const resultLink = document.getElementById('result-link').href;
    navigator.clipboard.writeText(resultLink).then(() => {
      alert('URL copied to clipboard!');
    });
  });
  
  function isValidUrl(url) {
    const pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return pattern.test(url);
  }
