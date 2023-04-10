import React, { useState } from 'react'

function Statemock() {

    const [count,setCount]=useState(0)

  return (
    <div>
        <h1>State Mock</h1>
        <p>{count}</p>
        <button onClick={()=>setCount((prevState)=>prevState+1)}>Increase</button>
        <button onClick={()=>setCount((prevState)=>prevState-1)}>Decrease</button>
    </div>
  )
}

export default Statemock