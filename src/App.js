import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";

const App = () =>{

    const [expenses, setExpenses] = useState([]);
    
    const addExpenseHandler = (expense) =>{
        setExpenses([expense,  ...expenses]);
    };

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}

export default App;