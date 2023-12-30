import React,{useEffect, useState} from "react";
import GoogleMapReact from "google-map-react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MapScreen = () => {
    const [latitude,setLetitude] = useState("");
    const [longitude,setLongitude] = useState("");

    const navigate = useNavigate();

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 11,
  };

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;
    setLetitude(crd.latitude);
    setLongitude(crd.longitude);
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="flex justify-center text-white md:w-1/3 w-full md:mx-auto">

        
      <div className="relative" style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAniYw9Ekna_jCmd6GlXtrIadN8_fA4Lqg" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
     
      <IoMdArrowBack
        onClick={() => navigate("/home")}
        className="absolute md:left-[28rem] left-[0rem] m-2 bg-[#171515] rounded-full text-2xl md:text-2xl cursor-pointer"
      />
        <div className="flex flex-col absolute bg-[#171515] rounded-lg w-full m-10 md:w-1/4">
            <input type="text" placeholder="source" className="border border-b-[#FF8000] border-t-[#171515] border-l-[#171515] border-r-[#171515] border-opacity-50 bg-[#171515] rounded-lg m-2 p-1 outline-none"/>
            <input type="text" placeholder="destination" className="border border-b-[#FF8000] border-t-[#171515] border-l-[#171515] border-r-[#171515] border-opacity-50 bg-[#171515] rounded-lg m-2 p-1 outline-none"/>
        </div>
      
    </div>
  );
};

export default MapScreen;
