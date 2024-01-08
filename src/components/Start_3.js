import React from "react";
import start3 from "../assets/logo/start-3.png";
import { useNavigate } from "react-router-dom";

const Start_3 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen justify-center items-end gap-y-5 text-white text-center p-5">
      <img src={start3} alt="app-logo" className="p-6" />
      <div>
        <h1 className="text-2xl">Book your car</h1>
        <p className="opacity-60">
          Sell houses easily with the help of Listenoryx and to make this line
          big I am writing more.
        </p>
      </div>
      <div onClick={() => navigate("/choice")}>
        <button className="bg-[#FF8000] text-white rounded-full text-[0.9rem] md:text-lg px-8 py-2 md:py-2 hover:translate-y-[1px]">
          Start
        </button>
      </div>
    </div>
  );
};

export default Start_3;