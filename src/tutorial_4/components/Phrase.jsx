import React from 'react';

function Phrase({ text }) {
  console.log(text);
  return (
    <>
      <div className="list">
        {text}
      </div>
    </>
  );
}

export default Phrase;
