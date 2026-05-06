import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(5);

  function increase() {
    console.log(value);
    setValue(value + 1); // not show good practice to update state based on previous state, because of async nature of setState
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={() => setValue(value - 1)}>decrease</button>
    </div>
  );
};

export default App;
