import { createSlice, current } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comment: []
  },
  reducers: {
    addComment(state, action) {
      state.comment.push(action.payload)
    }
  }
})

export default commentSlice.reducer;
export const commentActions = commentSlice.actions;