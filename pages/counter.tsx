import React, { FC, useState } from "react";

export default function counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>counter</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <h3>Count: {count}</h3>
    </div>
  );
}
