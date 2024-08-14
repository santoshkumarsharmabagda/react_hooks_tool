import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';

const UseState = () => {
    const [count, setCount] = useState(0);
    const nvi = useNavigate()
    const { theme } = useContext(ThemeContext);

  return (
    <div>
         <p>You clicked {count} times</p>
         {theme}
      {/* Update the 'count' state variable when the button is clicked */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

        
      <button onClick={()=>{nvi("/")}} >go</button>

    </div>
  )
}

export default UseState