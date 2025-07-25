import React from "react";

function TerniaryOperation() {
  const age = 18;
  const isGreen = false;
  return (
    <div>
      {/* THis uses terniary operation which means it executes if-else */}
      <h1>{age >= 18 ? "You can vote" : "You cannot vote"}</h1>
      <h1 style={{ color: isGreen ? "green" : "red" }}>THIS IS COLOR</h1>

      {/* if you want to only use if statements then use '&&' */}
      {isGreen && <button>Click Me</button>}
    </div>
  );
}

export default TerniaryOperation;
