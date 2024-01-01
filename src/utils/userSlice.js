import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        accountType:"",
        userData:null,
        loading:false,
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
        }
    }
});

export const {setUser,setUserInfo,setLoading} = userSlice.actions;
export default userSlice.reducer;