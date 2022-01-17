import React, { useState } from 'react';

/**
 *  TODO: Increase the counter by clicking the button and display the counter
 *  inside of the handleClick function -> increase the counter by 1
 *  display the counter in the empty {}
 */

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    /** increase counter here */
  };

  return (
    <>
      <h1>React Counter</h1>
      <p>counter: {/** display counter */}</p>
      <button onClick={handleClick}>count up!</button>
    </>
  );
};

export default App;
