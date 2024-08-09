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
      state.comment = state.comment.filter((comment) => comment.commentId !== action.payload);
    },
    deleteReply(state, action) {
      const commentIndex = state.comment.findIndex((comment) => comment.commentId === action.payload.commentId);
      const chatArray = state.comment[commentIndex].chat;
      const replyIndex = chatArray.findIndex((reply) => reply.replyId === action.payload.replyId);
      state.comment[commentIndex].chat.splice(replyIndex, 1);
    }
  }
})

export default commentSlice.reducer;
export const commentActions = commentSlice.actions;