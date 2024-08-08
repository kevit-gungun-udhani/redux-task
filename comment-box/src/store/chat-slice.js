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
        },
        delete(state, action){
            if(action.payload.index < state.chat.length && action.payload.index >= 0){
                state.chat = state.chat.toSpliced(action.payload.index, 1);
                if(state.chat.length === 0){
                    localStorage.removeItem('chat');
                }else{
                    localStorage.setItem('chat', JSON.stringify(state.chat))
                }
            }
        }
    }
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;