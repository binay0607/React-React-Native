import logo from "./logo.svg";
import "./App.css";
import useLocalStorage from "./CustomHooks/useLocalStorage";
function App() {
  const [count, setCount] = useLocalStorage("count", {
    count: 0,
    name: "binay",
  });
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h4>Count - {count.count}</h4>
      <button
        onClick={() => setCount({ name: "binay", count: +count.count + 1 })}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
