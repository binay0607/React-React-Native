import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useContext } from "react";
import Child from "./Child";
import { NameContext } from "../store/nameContext";
function App() {
  // const name = useContext(NameContext).name;
  const [show, setshow] = useState(false);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch({ type: "inc_counter" });
  };
  const dec = () => {
    dispatch({ type: "dec_counter" });
  };
  const handleClick = () => {
    setshow(!show);
  };
  const namecon = useContext(NameContext);
  const handleChangeText = (e) => {
    namecon.changeName(e.target.value);
  };
  return (
    <div className="App">
      <input onChange={handleChangeText} />
      {name}
      <Child />
      {/*
    //   {show && (
    //     <div>
    //       <div onClick={handleClick} className="overlay"></div>
    //       <div className="notification">
    //         <button onClick={handleClick}>hey remove all that</button>
    //       </div>
    //     </div>
    //   )}
    //   <h1>Hello There!</h1>
    //   <hr />
    //   <h1>Counter</h1>
    //   <h1>{counter}</h1>
    //   <div className="container">
    //     <div>
    //       <button onClick={inc}>+</button>
    //       <button onClick={dec}>-</button>
    //     </div>
    //     <button onClick={handleClick}>show me the modal</button>
    //   </div>*/}
    </div>
  );
}

export default App;
