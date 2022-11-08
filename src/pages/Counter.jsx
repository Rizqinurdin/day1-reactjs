import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleApp = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <>
      <div>Rizqinurdin</div>
      <h1>{count}</h1>
    </>
  );
};

export default Counter;
