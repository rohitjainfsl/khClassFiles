import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Signup";
import Login from "./Login";
import Quiz from "./Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
