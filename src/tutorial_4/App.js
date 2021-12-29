import React, { useState } from 'react';
import './App.css';

import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const adjectivesArr = [
  'абсолютный',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];

const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];

function App() {
  const [phrasesArr, setPhrases] = useState([]);

  const makePfrase = () => {
    return (
      adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)] +
      ' ' +
      adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)] +
      ' ' +
      nounsArr[Math.floor(Math.random() * nounsArr.length)]
    );
  };

  const addNewPhrases = () => {
    setPhrases([makePfrase(), ...phrasesArr]);
  };

  const clearPhrasesArr = () => {
    setPhrases([]);
  };

  return (
    <>
      <div className="wrapper">
        {!phrasesArr.length ? (
          <EmptyBlock />
        ) : (
          <Phrase
            text={phrasesArr.map((elemArr, index) => (
              <div key={index} className="block">
                <h3>{elemArr}</h3>
              </div>
            ))}
          />
        )}

        <button onClick={addNewPhrases} className="btn btn_generate">
          Сгенерировать
        </button>
        <button onClick={clearPhrasesArr} className="btn btn_clear">
          Очистить
        </button>
      </div>
    </>
  );
}

export default App;
