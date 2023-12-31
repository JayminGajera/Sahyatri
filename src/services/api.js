const BASE_URL = process.env.REACT_APP_API

export const auth = {
    SIGN_UP: BASE_URL + "/api/users/register",
    LOGIN: BASE_URL + "/api/users/login",
    SENDOTP_API: BASE_URL + "/api/users/sendOTP",
};