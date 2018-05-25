import React, {Component} from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expensesListFilters';


const ExpenseDashBoardPage = () =>(
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);


export default ExpenseDashBoardPage;


