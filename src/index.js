import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import theme from './theme/index'
import thunk from "redux-thunk";
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import mainReducer from "./store/reducers/index";

let store = createStore(mainReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
            <App />
    </ThemeProvider>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
