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
    setFormData({
      name: "",
      mobileNo: "",
      email: "",
      drivingLicence: "",
      vehicleNo: "",
    });
    navigate("/home");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex md:bg-black flex-col justify-between md:w-1/3 md:mx-auto text-white p-5 md:gap-y-4 gap-y-8">
      <IoMdArrowBack
        onClick={() => navigate("/choice")}
        className="text-2xl md:text-2xl cursor-pointer"
      />
      <div className="text-xl md:text-2xl p-2 md:p-0">
      {
        isDriver ? "Welcome , Are you redy for give rides !" : "Welcome , Are you redy for ride !"
      }
        
      </div>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="flex flex-col text-[0.9rem] md:text-[1rem]">
          <label>Name (As in PhotoID)</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="border border-[#FF8000] bg-[#171515] text-sm rounded-lg py-3 px-3 mt-1 md:py-2 outline-none"
          />
        </div>
        {/* mobile no */}
        <div className="flex flex-col text-[0.9rem] mt-3 md:text-[1rem]">
          <label>Mobile Number</label>
          <input
            required
            type="number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            placeholder="Enter Your Number"
            className="border border-[#FF8000] bg-[#171515] text-sm rounded-lg py-3 px-3 mt-1 md:py-2 outline-none"
          />
        </div>
        {/* email */}
        <div className="flex flex-col text-[0.9rem] mt-3 md:text-[1rem]">
          <label>Email Id</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="border border-[#FF8000] bg-[#171515] text-sm rounded-lg py-3 px-3 mt-1 md:py-2 outline-none"
          />
        </div>
        {/* driving license */}
        {isDriver && (
          <div className="flex flex-col text-[0.9rem] mt-3 md:text-[1rem]">
            <label>Driving Licence Number</label>
            <input
              required
              type="number"
              name="drivingLicence"
              value={formData.drivingLicence}
              onChange={handleChange}
              maxLength={16}
              minLength={16}
              placeholder="XXXX XXXX XXXX XXXX"
              className="border border-[#FF8000] bg-[#171515] text-sm rounded-lg py-3 px-3 mt-1 md:py-2 outline-none"
            />
          </div>
        )}
        {/* Vehicle Registration Number */}
        {isDriver && (
          <div className="flex flex-col text-[0.9rem] mt-3 md:text-[1rem]">
            <label>Vehicle Registration Number</label>
            <input
              required
              type="text"
              name="vehicleNo"
              value={formData.vehicleNo}
              onChange={handleChange}
              placeholder="XX - XX - XXXX"
              className="border border-[#FF8000] bg-[#171515] text-sm rounded-lg py-3 px-3 mt-1 md:py-2 outline-none"
            />
          </div>
        )}

        <div>
          <button type="submit" className="bg-[#FF8000] text-white rounded-full text-[0.9rem] md:text-lg px-16 py-2 mt-5 md:mt-6 w-full md:py-1">
            Sign Up
          </button>
          <p className="text-center text-sm sm:text-sm">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
     
    </div>
  );
};

export default Driver;