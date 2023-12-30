import { Routes, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import Choice from "./components/Choice";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import OtpVerify from "./components/Auth/OtpVerify";

function App() {
  return (
    <div className="min-h-screen md:h-fit h-full w-full bg-[#171515]">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
      </Routes>
    </div>
  );
}

export default App;
