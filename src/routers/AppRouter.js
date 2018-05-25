import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/header';
import ExpenseDashBoardPage from '../components/expenseDashBoardPage';
import AddExpensePage from '../components/addExpensePage';
import EditExpensePage from '../components/editExpensePage';
import HelpPage from '../components/helpPage';
import NotFoundPage from '../components/notFoundPage';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage}exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage}  />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>    
  </BrowserRouter>
);


export default AppRouter;
//yarn run dev-server

