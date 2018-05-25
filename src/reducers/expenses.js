import { createStore, combineReducers } from 'redux';

//Expense reducer
const expenseReducerDefaultState = []; //default state

export default (state = expenseReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
    //  return  state.concat(action.expense);  
     return [
      ...state, //spread array
      action.expense
    ]; 
    case 'REMOVE_EXPENSE':
      return state.filter(({id})=> id !== action.id);
    
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    
    default:
    return state;
  }
};


// import { createStore, combineReducers } from 'redux';
// import filtersReducer from '../reducers/filters';
// import expensesReducer from '../reducers/expenses';


// //store creation
// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters:filterReducer
//   })
// );
