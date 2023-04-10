import React, { useState } from "react";
import { MockFunction } from "./MockFunction";

function Dummy() {
  const [msg, setMsg] = useState();

  const fun = (arg) => {
    console.log(MockFunction(arg));
    setMsg(MockFunction(arg));
  };

  return (
    <div data-testid="dummy">
      <h1>Hello</h1>
      {msg ? <div>{msg}</div> : ""}
      <button onClick={() => fun(true)}>Login</button>
      <button onClick={() => fun(false)}>Logout</button>
    </div>
  );
}

export default Dummy;
