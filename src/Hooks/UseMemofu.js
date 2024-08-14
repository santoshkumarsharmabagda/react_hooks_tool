import React, { useState, useMemo } from 'react';

const UseMemofu = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');


    const expensiveCalculation = useMemo(() => {
        console.log('महंगा कैलकुलेशन चल रहा है...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
          result += i;
        }
        return result;
      }, [count]); // केवल count बदलने पर यह कैलकुलेशन फिर से चलेगा
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => (count + 1)}>Increment</button>
      <h2>Expensive Calculation Result: {expensiveCalculation}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  )
}

export default UseMemofu