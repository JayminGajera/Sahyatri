import { auth } from "../api";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";
import { setLoading } from "../../utils/userSlice";

const { SIGN_UP, LOGIN, SENDREGOTP_API, SENDLOGOTP_API } = auth;

export function sendRegOtp(formData, navigate) {
  const {
    name,
    mobileNumber,
    email,
    vehicleNumber,
    drivingLicence,
    accountType,
    photo,
    photoId,
  } = formData;
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDREGOTP_API, {
        name,
        mobileNumber,
        email,
        vehicleNumber,
        drivingLicence,
        accountType,
        photo,
        photoId,
      });
      console.log("SENDOTP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.success);
      }

      toast.success("OTP Sent Successfully");
      navigate("/otp-verify");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  };
}

export function sendLogOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDLOGOTP_API, {
        email,
      });
      console.log("SENDOTP API RESPONSE............", response);

      if (response.status !== 200) {
        throw new Error(response.status);
      }

      toast.success("OTP Sent Successfully");
      navigate("/otp-verify");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  };
}

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
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      if (accountType === "Driver") {
        var response = await apiConnector("POST", SIGN_UP, {
          name,
          mobileNumber,
          email,
          vehicleNumber,
          drivingLicence,
          accountType,
          photo,
          photoId,
        });
      } else {
        var response = await apiConnector("POST", SIGN_UP, {
          name,
          mobileNumber,
          email,
          accountType,
        });
      }

      console.log("SIGNUP_API RESPONSE....", response);

      // if(!response.data.success){
      //   throw new Error(response.data.message);
      // }

      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  };
}

export function login(mobileNumber, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN, {
        mobileNumber,
      });

      console.log("LOGIN API RESPONSE...",response);

      if(!response.success){
        throw new Error(response.success);
      }

      toast.success("Login Successful");
      navigate("/home");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
      navigate("/login");
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  };
}
