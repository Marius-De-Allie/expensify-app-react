// commit 37import react and navLink
import React from 'react';
import {NavLink} from 'react-router-dom';
{/*commit 9 new header comp*/}
// commit 38 move from approuter
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div><NavLink to="/" activeClassName="is-active">Home</NavLink></div>
    <div><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></div>
    <div><NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink></div>
    <div><NavLink to="/help" activeClassName="is-active">Help</NavLink></div>
  </header>
);
// commit 39 exp
export default Header;
