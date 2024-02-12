import React, {useState} from 'react'

function Counter() {
const [counter, setCounter] = useState(0)
const handleCounterInc = () => {
    // to just update the state
    // setCounter(counter + 1) // 1
    // setCounter(counter + 1) // 1
    // setCounter(counter + 1) // 1
    // to update the state with previous value
    setCounter(prev => prev + 1) // 1
    setCounter(prev => prev + 1) // 2
    setCounter(prev => prev + 1) // 3
}
const handleCounterDec = () => {
    setCounter(counter - 1)
}
  return (
    <div>
        <div>Counter {counter}</div>
        <button onClick={handleCounterDec}>Decrease Counter</button>
        <button onClick={handleCounterInc}>Increase Counter</button>
        
    </div>
  )
}

export default Counter