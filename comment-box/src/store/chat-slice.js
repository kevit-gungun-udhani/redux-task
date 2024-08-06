import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {chat: JSON.parse(localStorage.getItem('chat')) || []},
    reducers: {
        reply(state, action){
            if (!state.chat[action.payload.index]) {
                state.chat[action.payload.index] = [];
                state.chat[action.payload.index].push(action.payload.reply);
            } else {
                state.chat[action.payload.index].push(action.payload.reply)
            }
            localStorage.setItem('chat', JSON.stringify(state.chat));
        }
    }
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;