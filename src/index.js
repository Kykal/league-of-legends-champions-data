import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


//Styles
import './index.css';


//Redux
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'reduxStore';


//React router
import {
  BrowserRouter,
} from "react-router-dom";

//Custom components
import App from './App';


//Get element from HTML document
const root = ReactDOM.createRoot(document.getElementById('root'));


//Render component in strict mode
root.render(
  <React.StrictMode>
    <ReduxProvider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
