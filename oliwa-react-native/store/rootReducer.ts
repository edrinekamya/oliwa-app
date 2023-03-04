import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import ExpoFileSystem from 'redux-persist-expo-filesystem';
import createSecureStore from 'redux-persist-expo-securestore';
import authReducer from '../features/authSlice';

const ExpoSecureStore = createSecureStore();

const mainPersistConfig = {
  key: 'main',
  storage: ExpoFileSystem,
};

const authPersistConfig = {
  key: 'auth',
  storage: ExpoSecureStore,
};

const mainReducer = combineReducers({});

const combinedReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  // main: persistReducer(mainPersistConfig, mainReducer),
});

export default function rootReducer(state: any, action: any) {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return combinedReducer(state, action);
}
