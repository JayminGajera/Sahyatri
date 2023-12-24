import { Routes, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import Choice from "./components/Choice";
import SignUp from "./components/Auth/SignUp";

function App() {
  return (
    <div className="md:h-screen h-full w-full bg-[#171515]">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
