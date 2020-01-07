// commit 22 import React
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

// commit 23 move compt from approuter
const AddExpensePage = (props) => (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
        // console.log(expense);
      }}/>
    </div>
);
// commit 24 export default
export default connect()(AddExpensePage);
