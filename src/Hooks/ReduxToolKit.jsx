import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../counterSlice';
import NavNar from './NavNar';

const ReduxToolKit = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <NavNar/>
    <h1>{count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
  </div>
  )
}

export default ReduxToolKit