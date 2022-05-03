import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = (props) =>{
    return(
        <Card className="expenses">
            {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                            date={expense.date} 
                            title={expense.title} 
                            amount={expense.amount} />
                    )
                )
            }
            {/* <ExpenseItem date={props.item[0].date} title={props.item[0].title} amount={props.item[0].amount}/>
            <ExpenseItem date={props.item[1].date} title={props.item[1].title} amount={props.item[1].amount}/> */}
        </Card>
    );
}

export default Expenses;