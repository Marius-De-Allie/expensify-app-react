// commit 18 import react
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


// commit 19 move fn component from approuter
const ExpenseDashboardPage = () => (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
);
// commit 20 default exp
 export default ExpenseDashboardPage;
