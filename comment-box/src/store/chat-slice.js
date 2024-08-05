import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {chat: [['hello']]},
    reducers: {
        reply(state, action){
            state.chat = [...state.chat, action.payload.reply];
        },
        delete(state){
            state.chat.pop();
        }
    }
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;