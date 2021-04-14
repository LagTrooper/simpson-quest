import React from 'react';

function DisplayQuote({ quote }) {
  return (
    quote && (
      <div className='DisplayQuote'>
        <p>{quote.character}</p>
        <img src={quote.image} alt='' />
        <p>{quote.quote}</p>
      </div>
    )
  );
}

export default DisplayQuote;
