import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const token = useSelector((store) => store.user.token);

  const handleLogOut = () => {
    localStorage.removeItem("token",token);
    localStorage.removeItem("user",user);
    navigate('/login')
    toast.success("Log Out");
  }

  return (
    <div className="absolute top-[3.8rem] left-5 bg-gray-800 h-[85vh] md:h-fit w-[90%] md:w-[90%] rounded-md">
      <div className="flex flex-col justify-center items-start p-5 gap-y-5">
        <div className="flex w-[100%] justify-between">
        <img className="w-20 rounded-full" src={user?.image} />
        <button onClick={handleLogOut} className="border border-white rounded-md p-4 h-4 mt-5 flex justify-center items-center bg-gray-500">Log Out</button>
        </div>
        <h1 className="text-2xl">{user?.name}</h1>
        <p>
          <span className="opacity-70">Account Type</span> : {user?.accountType}
        </p>
        <p>
          <span className="opacity-70">Mobile No</span> : {user?.mobileNumber}
        </p>
        <p>
          <span className="opacity-70">Email</span> : {user?.email}
        </p>
        <p>
          {user.accountType === "Driver" ? (
            <>
              <span className="opacity-70">vehicle No : </span>
              <span>{user?.vehicleNumber}</span>
            </>
          ) : (
            " "
          )}{" "}
        </p>
        <p>
          {user.accountType === "Driver" ? (
            <>
              <span className="opacity-70">Driving Licence No : </span>
              <span>{user?.drivingLicence}</span>
            </>
          ) : (
            " "
          )}{" "}
        </p>
        <p>
          {user.accountType === "Driver" ? (
            <>
              <span className="opacity-70">Aadhar Card No : </span>
              <span>{user?.photoId}</span>
            </>
          ) : (
            " "
          )}{" "}
        </p>
        <p>
          <span className="opacity-70">Verify</span> :{" "}
          {user?.verified ? "Verfied" : "Unverify"}
        </p>
        <p>
          <span className="opacity-70">Starting Date</span> : {user?.createdAt}
        </p>
      </div>
    </div>
  );
};

export default Profile;
