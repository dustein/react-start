import { useState } from "react";

export function Counter() {

  let [counter, setCounter] = useState(0);

  function incremet() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h2>{counter}</h2>
      <button type="button" onClick={incremet}>Incrementar</button>
    </>
  )
}