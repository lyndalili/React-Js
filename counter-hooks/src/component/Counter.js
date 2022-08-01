import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(20);

  const handleMinClick = () => {
    count > 0 && setCount(count - 1);
  };
  const handlePlusClick = () => {
    count < 100 && setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleMinClick}>-</button>
      <span>{count}</span>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}

export default Counter;
