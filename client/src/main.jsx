import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { persistor,store } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // here we are making a store  for redux
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>

        
  </Provider>
     /* The PersistGate component from Redux Persist is used to delay the rendering of your application until the Redux store has been rehydrated (i.e., the state has been restored from storage) */
  
)
