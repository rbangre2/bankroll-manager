import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import gloablReducer from 'state'; 
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

const store = configureStore({
  reducer: {
    global: gloablReducer, 
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-lwavk5l2fl30tzag.us.auth0.com"
      clientId="ARSWKsJmmx12Z6CmnQ2SWv0nNyjJmtIL"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider> 
    </Auth0Provider>
  </React.StrictMode>
);

