import React, { useState } from "react";
import { useSelector } from "react-redux";
import Profile from "../Common/Profile";
import { useNavigate } from "react-router-dom";
import Navbar from "../Common/Navbar";

const PessangerHome = () => {

  const [menu,setMenu] = useState(false);
  const loginInfo = useSelector((store) => store.user.loginInfo);
  const user = useSelector((store) => store.user.user);

  const handleToggel = () => {
    setMenu(!menu);
  }
  return (
    <div className="w-full h-screen md:w-1/3 mx-auto relative text-white p-5">
      <div className="flex flex-col gap-5">
        <img
          onClick={handleToggel}
          className="w-10 rounded-full cursor-pointer"
          src={user?.image}
        />
        <h1 className="text-2xl">
          Hello👋{" "}
          <span className="text-[#FF8000]">
            {loginInfo ? loginInfo?.name : user.name}
          </span>
        </h1>
      </div>

      <div className="mt-4">
        <p>Start Riding</p>
      </div>

     <Navbar/>

      {menu && <Profile />}
    </div>
  );
};

export default PessangerHome;
