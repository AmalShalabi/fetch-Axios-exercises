import React, { useState } from "react";

function HookCouterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment5 = () => {
    for (let i = 0; i < 5; i++) setCount((preCount) => preCount + 1);
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((preCount) => preCount + 1)}>Increment</button>
      <button onClick={() => setCount((preCount) => preCount + 1)}>Decrement</button>
      <button onClick={increment5}>increment5</button>
    </div>
  );
}

export default HookCouterTwo;
