import React, { useState } from "react";
import { useSelector } from "react-redux";

const DriverHome = () => {

  const [menu,setMenu] = useState(false);

  const loginInfo = useSelector((store) => store.user.loginInfo);
  const user = useSelector((store) => store.user.user);

  const handleToggel = () => {
    setMenu(!menu);
  }


  return (
    <div className="w-full md:w-1/3 mx-auto relative">
      <div className="flex flex-col gap-5">
      <img onClick={handleToggel} className="w-10 rounded-full cursor-pointer" src={user?.image} />
        <h1 className="text-2xl">
          Hello👋{" "}
          <span className="text-[#FF8000]">
            {loginInfo ? loginInfo?.name : user.name}
          </span>
          
        </h1>
        
      </div>

      <div className="mt-4">
        <p>Start Driving</p>
      </div>

      
        {menu && 
        <div className="absolute top-12 left-0 bg-gray-800 h-[88vh] md:h-fit w-full md:w-full rounded-md">
            <div className="flex flex-col justify-center items-start p-5 gap-y-5">
              <img className="w-20 rounded-full" src={user?.image} />
              <h1 className="text-2xl">{user.name}</h1>
              <p ><span className="opacity-70">Account Type</span> : {user.accountType}</p>
              <p ><span className="opacity-70">Mobile No</span> : {user.mobileNumber}</p>
              <p ><span className="opacity-70">Email</span> : {user.email}</p>
              <p ><span className="opacity-70">vehicle No</span> : {user.vehicleNumber}</p>
              <p ><span className="opacity-70">Driving Licence No</span> : {user.drivingLicence}</p>
              <p ><span className="opacity-70">Aadhar Card No</span> : {user.photoId}</p>
              <p ><span className="opacity-70">Verify</span> : {user.verified ? "Verfied" : "Unverify"}</p>
              <p ><span className="opacity-70">Starting Date</span> : {user.createdAt}</p>
            </div>
        </div>

        }
      
    </div>
  );
};

export default DriverHome;
