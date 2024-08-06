import { createSlice } from "@reduxjs/toolkit";

const userActionSlice = createSlice({
    name: 'userAction',
    initialState: {isVisible: {}},
    reducers: {
        userReply(state, action){
            state.isVisible[action.payload] = !state.isVisible[action.payload];
        },
        userDelete(state, action){
            state.isVisible[action.payload] = false;
        }
    }
})

export default userActionSlice.reducer;
export const userActions = userActionSlice.actions;