import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './comment-slice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'comment',
    storage
}

const persistedReducer = persistReducer(persistConfig, commentReducer);

const store = configureStore({
  reducer: {
    comment: persistedReducer,
    
  },
});

const persistor = persistStore(store);

export  { store, persistor };