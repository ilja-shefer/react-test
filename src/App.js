import React from 'react';
import FunctionProfile from './components/FunctionProfile';
import ClassProfile from './components/ClassProfile';

function App() {
  return (
    <div>
      <FunctionProfile name='Вася Пупкин' registredAt={new Date(2021, 5, 22)} />
      <ClassProfile name='Вася Пупкин' registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
