import { auth } from "../api";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";
import { setLoading, setLoginInfo, setToken, setUserData } from "../../utils/userSlice";

const { SIGN_UP, LOGIN, SENDREGOTP_API, SENDLOGOTP_API,GETUSER_DETAIL_API } = auth;

export function sendRegOtp(email, navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDREGOTP_API, {
      email
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

export function sendLogOtp(mobileNumber, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDLOGOTP_API, {
        mobileNumber
      });
      console.log("LOGIN SENDOTP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/otp-verify");
    } catch (error) {
      console.log("LOGIN SENDOTP API ERROR............", error);
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
  otp,
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
          otp,
        });
      } else {
        var response = await apiConnector("POST", SIGN_UP, {
          name,
          mobileNumber,
          email,
          accountType,
          otp,
        });
      }

      console.log("SIGNUP_API RESPONSE....", response);

      if(!response.data.success){
        throw new Error(response.data.message);
      }

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

export function login(logUserNumber,otp, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN, {
        mobileNumber:logUserNumber,
        otp
      });

      console.log("LOGIN API RESPONSE...",response);

      if(!response.data.success){
        throw new Error(response.data.message);
      }

      dispatch(setLoginInfo(response.data.user));
      dispatch(setToken(response.data.token));

      localStorage.setItem("token",JSON.stringify(response.data.token));
      localStorage.setItem("user",JSON.stringify(response.data.user));
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

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GETUSER_DETAIL_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage =  `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.name}`
      dispatch(setUserData({ ...response.data.user, image: userImage }))

      navigate("/home")
    } catch (error) {
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Login Now")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}
