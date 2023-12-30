import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        accountType:"",
        userData:null,
    },
    reducers:{
        setUser : (state,action) => {
            state.accountType = action.payload;
        },
        setUserInfo: (state,action) => {
            state.userData = action.payload;
        }
    }
});

export const {setUser,setUserInfo} = userSlice.actions;
export default userSlice.reducer;