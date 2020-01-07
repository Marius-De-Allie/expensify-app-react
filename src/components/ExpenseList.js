import React from 'react';
import {connect} from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = props => (
    <div>
      <h2>Expense List</h2>
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })}
    </div>
  // <div>
  //   <h2>ExpenseList</h2>
  //   {props.filters.text}
  //   {props.expenses.length}
  // </div>
);

// Alternate way of calling connect and exporting in 2 steps not as commonly used
// const ConnectedExpenseList = connect((state) => {
//   return {
//     // name: 'Marius'
//     expenses: state.expenses
//   };
// })(ExpenseList);
//
// export default ConnectedExpenseList;

// prefered way of calling connect and exporting simultaneously.
// export default connect((state => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters
//   };
// }))(ExpenseList);


// ALTERNATE SYNTAX FOR connect using mapstatetoprops to create the call back fn to be passed into Connect.

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
