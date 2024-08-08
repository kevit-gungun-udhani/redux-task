import { createSlice } from "@reduxjs/toolkit";


const inputSlice = createSlice({
  name: 'input',
  initialState: { userInput: JSON.parse(localStorage.getItem('Comment')) || [] },
  reducers: {
    handleInput(state, action) {
      state.userInput = [...state.userInput, action.payload.userInput];
    },
    handleDelete(state, action){
      if(action.payload.index < state.userInput.length && action.payload.index >= 0){
        state.userInput = state.userInput.toSpliced(action.payload.index, 1);
        console.log(state.userInput)
        if(state.userInput.length === 0){
          localStorage.removeItem('Comment');
        }else{
          localStorage.setItem('Comment', JSON.stringify(state.userInput));
        }
      }
    }
  },
});

export default inputSlice.reducer;
export const inputActions = inputSlice.actions;