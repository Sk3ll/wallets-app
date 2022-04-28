import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import './styles.css';
import { Router } from './router';
import reportWebVitals from './reportWebVitals';
import setupStore from './store';

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <Router />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
