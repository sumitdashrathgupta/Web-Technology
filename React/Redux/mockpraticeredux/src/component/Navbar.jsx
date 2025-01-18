import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAction } from '../slicefolder/counterSlice'

const Navbar = () => {
    let countVal = useSelector((initialState)=>initialState.count)
    let dispatch = useDispatch();

  return (
    <div>
        <h1>Count: {countVal}</h1>
        <button type='button' onClick={()=>dispatch(increment())}>Increment</button>
        <button type='button' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button type='button' onClick={()=>dispatch(incrementByAction(10))}>IncrementByAction</button>
    </div>
  )
}

export default Navbar