import { Routes, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import Choice from "./components/Choice";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import OtpVerify from "./components/Auth/OtpVerify";
import MapScreen from "./components/RiderScreen/MapScreen";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Error from "./components/Error";

function App() {
  return (
    <div className="min-h-screen md:h-fit h-full w-full bg-[#171515]">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
        <Route path="/map-screen" element={<MapScreen />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
