import { render } from 'react-dom';
import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>React Counter</h1>
      <p>counter: {counter}</p>
      <button onClick={handleClick}>count up!</button>
    </>
  );
};

export default App;


render(<App />, document.getElementById('root'));
