import { useContext } from "react";
import "./App.css";
import Child from "./comp/Child";
import GrandChild from "./comp/GandChild";
import { NameContext } from "./store/nameContext";
function App() {
  const namectx = useContext(NameContext);
  const handleChange = (e) => {
    console.log(e.target.value);
    namectx.changeName(e.target.value);
  };
  return (
    <div className="App">
      <input style={{ margin: 50 }} onChange={handleChange}></input>
      <p>I am at root {namectx.name}</p>
      <Child />
    </div>
  );
}

export default App;
