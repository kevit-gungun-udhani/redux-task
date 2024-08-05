import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: 'input',
    initialState: {userInput: []},
    reducers: {
        handleInput(state, action){
            state.userInput = [...state.userInput, action.payload.userInput]
        }
    }
});

export default inputSlice.reducer;
export const inputActions = inputSlice.actions;