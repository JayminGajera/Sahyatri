import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        accountType:"",
        userData:null,
        logUserNumber:null,
        loading:false,
        loginInfo:null,
        isLogin:false,
        token:null,
    },
    reducers:{
        setUser : (state,action) => {
            state.accountType = action.payload;
        },
        setUserInfo: (state,action) => {
            state.userData = action.payload;
        },
        setLoading: (state,action) => {
            state.loading = action.payload;
        },
        setLogUserNumber:(state,action) => {
            state.logUserNumber = action.payload;
        },
        setLoginInfo:(state,action) => {
            state.loginInfo = action.payload;
        },
        setIsLogin:(state,action) => {
            state.isLogin = action.payload;
        },
        setToken:(state,action) => {
            state.token = action.payload;
        }
    }
});

export const {setUser,setUserInfo,setLoading,setLogUserNumber,setLoginInfo,setIsLogin,setToken} = userSlice.actions;
export default userSlice.reducer;