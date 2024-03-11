import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => increase()}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
export default Counter;
