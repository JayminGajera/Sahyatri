import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Driver = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    drivingLicence: "",
    vehicleNo: "",
  });
  const navigate = useNavigate();

  const isDriver = useSelector((store) => store.user.isDriver);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", formData);
    setFormData("");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex md:bg-black flex-col justify-between md:w-1/2 md:mx-auto text-white p-5 gap-y-8">
      <IoMdArrowBack
        onClick={() => navigate("/choice")}
        className="text-4xl cursor-pointer"
      />
      <div className="text-3xl p-2">
        Welcome , Are you redy for give rides !
      </div>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="flex flex-col text-xl">
          <label>Name (As in PhotoID)</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="border border-[#FF8000] bg-[#171515] text-lg rounded-lg py-3 px-3 mt-1"
          />
        </div>
        {/* mobile no */}
        <div className="flex flex-col text-xl mt-3">
          <label>Mobile Number</label>
          <input
            type="number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            placeholder="Enter Your Number"
            className="border border-[#FF8000] bg-[#171515] text-lg rounded-lg py-3 px-3 mt-1"
          />
        </div>
        {/* email */}
        <div className="flex flex-col text-xl mt-3">
          <label>Email Id</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="border border-[#FF8000] bg-[#171515] text-lg rounded-lg py-3 px-3 mt-1"
          />
        </div>
        {/* driving license */}
        {isDriver && (
          <div className="flex flex-col text-xl mt-3">
            <label>Driving Licence Number</label>
            <input
              type="number"
              name="drivingLicence"
              value={formData.drivingLicence}
              onChange={handleChange}
              maxLength={16}
              minLength={16}
              placeholder="XXXX XXXX XXXX XXXX"
              className="border border-[#FF8000] bg-[#171515] text-lg rounded-lg py-3 px-3 mt-1"
            />
          </div>
        )}
        {/* Vehicle Registration Number */}
        {isDriver && (
          <div className="flex flex-col text-xl mt-3">
            <label>Vehicle Registration Number</label>
            <input
              type="text"
              name="vehicleNo"
              value={formData.vehicleNo}
              onChange={handleChange}
              placeholder="XX - XX - XXXX"
              className="border border-[#FF8000] bg-[#171515] text-lg rounded-lg py-3 px-3 mt-1"
            />
          </div>
        )}
      </form>
      <div>
          <button className="bg-[#FF8000] text-white rounded-full text-2xl px-16 py-3 mt-5 w-full ">
            Sign Up
          </button>
          <p className="text-center text-lg">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
    </div>
  );
};

export default Driver;
