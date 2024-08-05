import { createSlice } from "@reduxjs/toolkit";

const userActionSlice = createSlice({
    name: 'userAction',
    initialState: {isVisible: false},
    reducers: {
        userReply(state){
            state.isVisible = true;
        },
        userDelete(state){
            state.isVisible = false;
        }
    }
})

export default userActionSlice.reducer;
export const userActions = userActionSlice.actions;