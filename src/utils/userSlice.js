import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        accountType:"",
    },
    reducers:{
        setUser : (state,action) => {
            state.accountType = action.payload;
        }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;