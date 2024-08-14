import React, { useReducer } from 'react'

const reducer = (state, action) => {
    console.log(action, "/n" , state)
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };

const UseReducerHooks = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
         <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

export default UseReducerHooks