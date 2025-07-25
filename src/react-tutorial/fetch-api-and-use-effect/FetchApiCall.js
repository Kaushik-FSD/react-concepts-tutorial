import React, { useEffect, useState } from "react";
import Axios from "axios";
function FetchApiCall() {
  //if we just try to update the state in every api call, that means we are mounting and updating
  // since we know state change/update (i.e., mount then update) will cause re-rendering,
  // this will cause an infinite loop
  //thus we need to use useEffect hook to control the flow of the component

  /*const [catFact, setCatFact] = React.useState("");
  Axios.get("https://catfact.ninja/fact").then((resp) => {
    console.log(resp.data);
    setCatFact(resp.data.fact);
  });*/

  const [catFact, setCatFact] = useState("");

  function fetchCatFact() {
    Axios.get("https://catfact.ninja/fact").then((resp) => {
      setCatFact(resp.data.fact);
    });
  }

  useEffect(() => {
    // Axios.get("https://catfact.ninja/fact").then((resp) => {
    //   console.log(resp.data);
    //   setCatFact(resp.data.fact);
    // });
    fetchCatFact();
  }, []);

  return (
    <div>
      <h1>Fetch API Call Example</h1>
      <button onClick={fetchCatFact}>Change Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default FetchApiCall;
