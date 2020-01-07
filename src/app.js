import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// commit 16 import approuter into app
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// Import expenses action creator/generator.
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
// import selector.
import getVisibleExpenses from './selectors/expenses';
const store = configureStore();

//  addExpense -> Water Bill
// store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
//  addExpense -> Gas Bill
// store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000 }));

// store.dispatch(addExpense({description: 'Rent', amount: 109500}));

// setTextFilter -> bill (2 items) -> water (1 item)
// store.dispatch(setTextFilter('water'));
// setTimeout(() => {
//   store.dispatch(setTextFilter('rent'));
// }, 3000);
// getVisibleExpenses -> print visible ones to screen
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

// Create redux store
console.log(store.getState());
// update render  emthod first arg.
ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
