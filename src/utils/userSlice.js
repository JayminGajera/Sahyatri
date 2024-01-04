import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        accountType:"",
        userData:null,
        logUserNumber:null,
        loading:false,
        loginInfo:null,
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
        }
    }
});

export const {setUser,setUserInfo,setLoading,setLogUserNumber,setLoginInfo} = userSlice.actions;
export default userSlice.reducer;