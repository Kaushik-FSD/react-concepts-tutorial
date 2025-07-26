import React, { useContext } from "react";
import { AppContext } from "../react-tutorial/state-management-use-context/StateManagementHook";

function Profile() {
  const { username, setUsername } = useContext(AppContext);

  // Local state to handle the new username input
  const [newUserName, setNewUserName] = React.useState("");

  function setNewUserNameFunc(event) {
    setNewUserName(event.target.value);
  }

  function handleChange() {
    setUsername(newUserName);
  }

  return (
    <div>
      <h1>The username is: {username}</h1>
      <input onChange={setNewUserNameFunc} />
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
}

export default Profile;
