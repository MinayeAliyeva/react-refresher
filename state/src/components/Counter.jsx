import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount( 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={()=>increase()}>+</button>
      <button onClick={()=>decrease()}>-</button>
    </div>
  );
}
export default Counter;
