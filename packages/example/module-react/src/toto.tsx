import React, { useState, useCallback } from "react";

export const Toto: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);
  return (
    <div>
      Ok!
      <button onClick={increment}>Increment</button>
      <h1>Count is {count}</h1>
    </div>
  );
};
