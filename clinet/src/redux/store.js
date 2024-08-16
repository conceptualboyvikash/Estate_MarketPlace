import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

export const store = configureStore({
  // { user: userReducer } is a slice of reducers which work as a reducer and acces like state.user.
  reducer: { user: userReducer },
  //this middleware is a syntax so that we don't get error in future no meansing.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});