import React from "react";
import { useContext } from "react";
import { AppContext } from "../react-tutorial/state-management-use-context/StateManagementHook";
function Home() {
  // Grabbing the context that we set in StateManagementHook.js
  // Since we are exporting AppContext, we can use it here to access the username
  // This allows us to use the username without prop drilling
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>My name is: {username}</h1>
    </div>
  );
}

export default Home;
