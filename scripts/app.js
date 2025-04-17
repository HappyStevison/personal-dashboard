// scripts/app.js
async function loadQuote() {
    const response = await fetch('quotes.json');
    const quotes = await response.json();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.querySelector('#quote-widget .quote-content').innerHTML = `
      <blockquote>"${randomQuote.quote}"</blockquote>
      <p>- ${randomQuote.author}</p>
    `;
  }
  
  document.getElementById('new-quote').addEventListener('click', loadQuote);
  loadQuote(); // Initial load