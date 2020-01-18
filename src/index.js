// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import App from "./Components/App";


// // ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// )


import React from 'react';
import {render}from 'react-dom';
import { Provider } from 'react-redux'
import App from "./Components/App";
 
import configureStore from './store'
 
const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)