import React from "react";
import { useState } from "react";
function UseStateHookExample() {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function changeAge() {
    setAge(age + 1);
  }

  function changeInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div>
        {age}
        <button onClick={changeAge}>Increase</button>
      </div>
      <div>
        {inputValue}
        <input onChange={changeInputValue} />
      </div>
    </>
  );
}

export default UseStateHookExample;
