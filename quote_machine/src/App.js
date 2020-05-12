import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const library = [
    ['random quote 1', 'author 1'],
    ['random quote 2', 'author 2'],
    ['random quote 3', 'author 3'],
    ['random quote 4', 'author 4'],
    ['random quote 5', 'author 5'],
    ['random quote 6', 'author 6'],
    ['random quote 7', 'author 7'],
    ['random quote 8', 'author 8'],
    ['random quote 9', 'author 9'],
  ];

  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * 9));

  const newQuote = () => {
    setQuoteIndex(Math.floor(Math.random() * 9));
  };

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          {'"' + library[quoteIndex][0] + '"'}
        </div>
        <div id="author">
          {'- ' + library[quoteIndex][1]}
        </div>
        <a href={'http://twitter.com/intent/tweet?text=' + library[quoteIndex][0] + ' - ' + library[quoteIndex][1]} id="tweet-quote"><button>tweet</button></a>
        <button id="new-quote" onClick={newQuote}>New quote</button>
      </div>
    </div>
  );
}

export default App;
