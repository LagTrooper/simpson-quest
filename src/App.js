import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';

const firstQuote = {
  character: 'Homer Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  quote: 'Marriage is like a coffin and each kid is another nail.',
};

function App() {
  const [quote, setQuote] = useState(firstQuote);
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((results) => results.data)
      .then((data) => {
        setQuote(data[0]);
      });
  };
  return (
    <div className='App'>
      <DisplayQuote quote={quote} />
      <button type='button' onClick={getQuote}>
        New quote
      </button>
    </div>
  );
}

export default App;
