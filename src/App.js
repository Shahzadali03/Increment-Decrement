import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './action'

function App() {
  const dispatch = useDispatch()
const counter = useSelector(state => state.counter.count)
  return (
    <div className='main'>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(inc())}>Inc</button>
      <button onClick={()=>dispatch(dec())}>Dec</button>
    </div>
  )
}

export default App