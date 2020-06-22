import React from "react";
import ReactDOM from "react-dom";
// import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import AppRouter from './Routers/AppRouter'
import configureStore from './stores/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter}from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux';


const store = configureStore()



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("id1"));
