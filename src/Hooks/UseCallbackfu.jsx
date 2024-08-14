import React, { useCallback, useState } from 'react';

function ExpensiveComponent({ xxxx }) {
   
    console.log("ExpensiveComponent rendered");
    return <button onClick={xxxx}>Click me</button>;
  }
  

const UseCallbackfu = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
      console.log("Button clicked");
    }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent xxxx={handleClick} />
    </div>
  )
}

export default UseCallbackfu