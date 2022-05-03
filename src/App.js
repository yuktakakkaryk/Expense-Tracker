import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";


let dummyExpense = [
    {
        id: 'e1',
        title: 'School Fee',
        amount: 250,
        date: new Date(2022, 3, 18)
    },
    {
        id: 'e2',
        title: 'School Fees',
        amount: 250,
        date: new Date(2022, 3, 18)
    }
];
const App = () =>{

    const [expenses, setExpenses] = useState(dummyExpense);
    
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