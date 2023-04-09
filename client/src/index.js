// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { App } from './App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import './index.css';

// // [x] Build out our store 
// // [x] Provider provides the store 
// // [x] createStore creates the store 

// import rootReducer from './components/reducers';

// // will take in a reducer and an enhancer (enhancer is middleware)
// // reducers are functions for now set it to empty function {} <- is a state but can set to empty object [] for now 
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// // const store = createStore(() => [])

// // App and all of App's children will have access to the empty array [] from store 
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Route>
//         <Provider store={store} >
//           <App />
//         </Provider>
//       </Route>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './components/reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(() => [])

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();