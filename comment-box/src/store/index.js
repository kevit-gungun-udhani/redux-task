import {configureStore} from '@reduxjs/toolkit';
import inputReducer from './input-slice' 
import chatReducer from './chat-slice'
import userReducer from './userAction-slice'

const store = configureStore({
    reducer: {
        input: inputReducer,
        chat: chatReducer,
        userAction: userReducer
    }
});

export default store