import React, { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0)

  // let counter = 0  

  // function increment() {
  //   if(counter < 10)
  //     setCounter(counter + 1)
  // }
  // function decrement() {
  //   if(counter > 0)
  //     setCounter(counter - 1)
  // }

  // function changeValue(str) {
  //   if (str === 'inc') {
  //     if (counter < 10)
  //       setCounter(counter + 1)
  //   }
  //   else {
  //     if (counter > 0)
  //       setCounter(counter - 1)
  //   }
  // }

  // function changeValue(str) {
  //  (str === 'inc')
  //     ? (counter < 10) ? setCounter(counter + 1) : ''
  //     : (counter > 0) ? setCounter(counter - 1) : ''
  // }


  function changeValue(str) {
    (str === 'inc')
      ? (counter < 10) && setCounter(counter + 1)
      : (counter > 0) && setCounter(counter - 1)
  }


  return (
    <section>
      <button onClick={() => changeValue('inc')}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => changeValue('dec')}>Decrement</button>
    </section>
  )
}

export default Counter