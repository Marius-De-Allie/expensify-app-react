import React from 'react'; // commit 26
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

// commit 27 moved from approuter
/*commit 42 add props param to EditExpensePage fn*/
/*commit 43 use props param in jsx of EditExpensePage fn*/

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm expense={props.expense} onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
        // console.log('updated' expense);
      }}/>
      <button onClick={() => {
        props.dispatch(removeExpense({id: props.expense.id}));
        // return to dashboard page
        props.history.push('/');
      }}>remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
  // state.expenses.filter((expense) => {
  //   return expense.id === props.match.params.id;
  // });
};
// commit 28 exsport
export default connect(mapStateToProps)(EditExpensePage);


// (state) => ({
//   expenses: state.expenses
// })
