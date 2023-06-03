const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader');

// Loading
loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
loadingComplete = () => {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

newQuote = () => {
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author;
    loadingComplete();
}

// Tweet
tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote(); 