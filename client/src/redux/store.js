import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });
/* combineReducers is used to combine multiple reducers into one root reducer.const rootReducer = combineReducers({
  partA: reducerA,
  partB: reducerB,
}); like that */

/* Redux Persist is a library that helps you save and rehydrate (restore) the Redux store's state between page reloads.
*/
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

/*
persistConfig specifies how Redux Persist should handle the state.
key: 'root' is the key used in local storage to save the state.
storage refers to the storage mechanism (in this case, local storage) where the state will be persisted.
version helps in handling migrations if you decide to change the shape of the state in the future.

version means differnt app version ..1.0.1 ,1.0.2 like that
*/

const persistedReducer = persistReducer(persistConfig, rootReducer);


//persistReducer -> high order reducer which wrap root reducer to make persistent
export const store = configureStore({
  // { user: userReducer } is a slice of reducers which work as a reducer and acces like state.user.
  reducer:persistedReducer,
  //this middleware is a syntax so that we don't get error in future no meansing.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

/* 
configureStore creates the Redux store with the persistedReducer. This means that the state managed by this store will be saved to and restored from local storage.
getDefaultMiddleware({ serializableCheck: false }) is used to configure middleware. The serializableCheck: false option is needed because Redux Persist uses non-serializable values (like local storage), which would otherwise cause warnings or errors.

*/

export const persistor = persistStore(store);

/* 
persistStore creates a persistor that can be used to subscribe to changes in the Redux store and rehydrate the state when the application is reloaded.
*/