import { Routes, Route, useNavigate } from "react-router-dom";
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
import Start_1 from "./components/Start_1";
import Start_2 from "./components/Start_2";
import Start_3 from "./components/Start_3";
import { getUserDetails } from "./services/operations/authAPI";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));
      dispatch(getUserDetails(token, navigate));
    }
  }, []);
  return (
    <div className="min-h-screen md:h-fit h-full w-full bg-[#171515]">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/start-1" element={<Start_1 />} />
        <Route path="/start-2" element={<Start_2 />} />
        <Route path="/start-3" element={<Start_3 />} />
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
