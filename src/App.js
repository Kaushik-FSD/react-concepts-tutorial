import "./App.css";
import FetchApiCall from "./react-tutorial/fetch-api-and-use-effect/FetchApiCall";
import UseStateHookExample from "./react-tutorial/react-hooks/UseStateHookExample";
import ReactRouterTutorial from "./react-tutorial/react-router/ReactRouterTutorial";
import StateManagementHook from "./react-tutorial/state-management-use-context/StateManagementHook";
import ToDo from "./react-tutorial/to-do-app/ToDo";
// import ComponentPropsExample from "./react-tutorial/components-props/ComponentPropsExample";
// import TerniaryOperation from "./react-tutorial/terniary-operation/TerniaryOperation";
function App() {
  return (
    <div className="App">
      {/* <ComponentPropsExample />
      <TerniaryOperation /> */}
      {/* <UseStateHookExample /> */}
      {/* <ToDo /> */}
      {/* <FetchApiCall /> */}
      {/* <ReactRouterTutorial /> */}
      <StateManagementHook />
    </div>
  );
}

export default App;
