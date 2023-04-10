import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayOut from "./screens/LayOut";
import Admin from "./screens/Admin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// style={{ width: 100, height: 100, backgroundColor: "red" }}
