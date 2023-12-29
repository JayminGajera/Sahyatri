import { auth } from "../api";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";

const { SIGN_UP } = auth;

export function signUp(
  name,
  mobileNumber,
  email,
  vehicleNumber,
  drivingLicence,
  accountType,
  photo,
  photoId,
  navigate
) {
  return async () => {
    try {

        if(accountType === "Driver"){
            var response = apiConnector("POST", SIGN_UP, {
                name,
                mobileNumber,
                email,
                vehicleNumber,
                drivingLicence,
                accountType,
                photo,
                photoId,
              });
        }else{
            var response = apiConnector("POST", SIGN_UP, {
                name,
                mobileNumber,
                email,
                accountType
                
              });
        }
      
        
      
      toast.success("Signup Successful");
      navigate("/home");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
  };
}
