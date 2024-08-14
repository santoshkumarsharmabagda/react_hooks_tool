import React from 'react'
import { useSelector } from 'react-redux';

const NavNar = () => {
    const count = useSelector((state) => state.counter.value);
  return (
    <div   style={{display: 'inline-block', margin: '10px', padding: '10px', border: '1px solid black'}}>

        {count}
      
    </div>
  )
}

export default NavNar