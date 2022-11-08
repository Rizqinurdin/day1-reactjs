import React from "react";
import { useState } from "react";

const CounterPro = () => {
  let [count, setCount] = useState(0);

  const handleApp = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  const minusApp = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>CounterPro</div>
      <h1>{count}</h1>
      <button onClick={handleApp}>Click</button>
      <button onClick={minusApp}>Click</button>
    </>
  );
};

export default CounterPro;
