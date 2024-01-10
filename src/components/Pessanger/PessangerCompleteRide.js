import React, { useEffect } from "react";
import Navbar from "../Common/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRideReqest } from "../../services/operations/authAPI";
import { FaArrowRightLong } from "react-icons/fa6";

const PessangerCompleteRide = () => {
  const rides = useSelector((store) => store.rideRequest);
  console.log("rides", rides.rides[0]);

  const { requestId } = useParams();
  console.log("req id", requestId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
      dispatch(getRideReqest(requestId, navigate));
  }, []);

  return (
    <div className="w-full h-[100%] md:w-1/3 mx-auto text-white p-5">
      <h1 className="text-xl opacity-50">Your ride</h1>
      {rides?.rides[0]?.map((ride) => (
        <div className="flex flex-col gap-y-3 m-5 mb-10 border border-[#FF8000] p-5 rounded-md">
          <div className="flex justify-between items-center border-b border-[#FF8000] p-2 opacity-90">
            <p>{ride.source}</p>
            <FaArrowRightLong/>
            <p>{ride.destination}</p>
          </div>

          <p className="text-center opacity-80">{ride?.travelTime?.toString().slice(0,15)}</p>
        </div>
      ))}
      <Navbar />
    </div>
  );
};

export default PessangerCompleteRide;
