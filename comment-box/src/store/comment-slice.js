import { createSlice, current } from "@reduxjs/toolkit";

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
        if (comment.commentId === action.payload.commentId) {
          comment.isVisible = !comment.isVisible;
          if(action.payload.hasOwnProperty('replyId')){
            comment.chat.push(
              {
                replyId: action.payload.replyId,
                data: action.payload.data
              }
            )
          }   
        }
      })
    },
    deleteComment(state, action){
      console.log(current(state.comment))
      state.comment.map((item) => {
        console.log(item)
      })
    }
  }
})

export default commentSlice.reducer;
export const commentActions = commentSlice.actions;