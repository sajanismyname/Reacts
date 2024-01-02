import React,  { useState } from 'react';



function App() {


  let [counter, setCounter] = useState(2)

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter +  1
    setCounter(counter + 1)
  }

  const removeValue = () => {
      console.log("removed", counter);
      setCounter (counter - 1)
  }

  return (
    <>
    <h1>Hello world | Sajan Limbu</h1>
    <h2>I am {counter}</h2>

    <button onClick={addValue}
    > Add value {counter}
    </button>

  <button onClick={removeValue}> remove value {counter}</button>
    <p> footer: {counter} </p>


    </>
    
  )
}

export default App
