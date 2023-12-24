import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/userSlice";

const Choice = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDriver = () => {
    dispatch(setUser(true));
    navigate("/signup");
  }

  const handlePessanger = () => {
    dispatch(setUser(false));
    navigate("/signup");
  }

  return (
    <div className="flex flex-col h-screen justify-center gap-y-10 items-center text-white">
      
        <button onClick={handleDriver} className="border border-[#FF8000] rounded-full px-16 py-3">
          Give Ride
        </button>
      
      
        <button onClick={handlePessanger} className="border border-[#FF8000] rounded-full px-16 py-3">
          Take Ride
        </button>
     
    </div>
  );
};

export default Choice;
