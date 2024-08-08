import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comment: []
  },
  reducers: {
    addComment(state, action) {
      state.comment.push(action.payload)
    },
    toggle(state, action) {
      state.comment.map((comment) => {
        if (comment.commentId === action.payload) {
          comment.isVisible = !comment.isVisible;   
        }
      })
    },
    addReply(state, action) {
      if (action.payload) {
        
      }
    }
  }
})

export default commentSlice.reducer;
export const commentActions = commentSlice.actions;