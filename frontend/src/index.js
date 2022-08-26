import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import store from './app/store';


ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
  document.getElementById('root')
);

