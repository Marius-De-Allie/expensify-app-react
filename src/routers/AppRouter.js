// Commit 12. create new routes folder
// Commit 13. create new AppRouter file
// commit 17 import react.
import React from 'react';
// commit 1.
// COMMIT 5 IMPORT SWITCH
//commit 8 import Link
// commit 11 import navlink
import {BrowserRouter, Route, Switch, Link, NavLink} from'react-router-dom'; //import react router.
// import 'normalize.css/normalize.css';
import '../styles/styles.scss';
// commit 21 import
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// commit25
import AddExpensePage from '../components/AddExpensePage';
// commit29
import EditExpensePage from '../components/EditExpensePage';
// COMMIT 32
import HelpPage from '../components/HelpPage';
// commit 36
import NotFoundPage from '../components/NotFoundPage';
// commit 40
import Header from '../components/Header';

// import IndecisionApp from './components/IndecisionApp';
console.log('app.js is running!!');
// 2. COMMIT -* COMMIT 3 IN WEBPACKCONFIG FILE
// commit 14 rename router comp to app router.
const AppRouter = () => (
  <BrowserRouter>
  {/*commit 10 add new div*/}
    <div>
    {/*commit 11 add Header comp*/}
      <Header />
    {/*Commit 6 switch */}
      <Switch>
        {/* 4  COMMIT */}
        <Route path="/" exact component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        {/*Commit 41 update path with :id*/}
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        {/*commit 7 route for 404 */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
// 15. commit export approuter asd degfauilt export.
export default AppRouter;
