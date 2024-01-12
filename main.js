function translateText() {
    const inputText = document.getElementById('inputText').value;
    const url = 'https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY';
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        q: inputText,
        source: 'ja',
        target: 'en'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('translatedText').innerText = data.data.translations[0].translatedText;
    })
    .catch(error => console.error('Error:', error));
  }
  