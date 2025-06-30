import React from 'react'
import './App.css'
import {Count} from './components/count'

const App = () =>{

  const [counter,setCounter] = React.useState(0)

  const increaseCnt = () =>{
      setCounter(prevCnt => prevCnt+1)
  }

  const decreaseCnt = () =>{
      setCounter(prevCnt => prevCnt-1)
  }
    
    return (
        <main className="container">
            <h1>Let's start counting from 0 '+' means Incremnent by 1 & '-' mean decerement by 1</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decreaseCnt}>–</button>
                <Count
                    number = {counter}
                />
                <button className="plus" aria-label="Increase count" onClick={increaseCnt}>+</button>
            </div>
        </main>
    )
};

export default App
