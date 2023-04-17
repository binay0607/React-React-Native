import logo from "./logo.svg";
import "./App.css";
import useLocalStorage from "./CustomHooks/useLocalStorage";
function App() {
  const [count, setCount] = useLocalStorage("count", {
    count: 0,
    name: "binay",
  });
  return (
    
  );
}

export default App;
