import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        isDriver:true,
    },
    reducers:{
        setUser : (state,action) => {
            state.isDriver = action.payload;
        }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;