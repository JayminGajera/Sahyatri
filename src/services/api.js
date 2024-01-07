const BASE_URL = process.env.REACT_APP_API

export const auth = {
    SIGN_UP: BASE_URL + "/api/users/register",
    LOGIN: BASE_URL + "/api/users/login",
    SENDREGOTP_API: BASE_URL + "/api/users/registerOTP",
    SENDLOGOTP_API: BASE_URL + "/api/users/loginOTP",
    GETUSER_DETAIL_API: BASE_URL + "/api/users/getUser",
};