import React, { useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// props is created as an object that will contain every property passed in the parent component.
//we have used toISOString() because in app.js, date is an object. So we have to convert it to string.
// <div>{props.date.toISOString()}</div>
const ExpenseItem = (props) =>{

    // let [newTitle, newSetTitle] = useState("");

    // let [title, setTitle] = useState(props.title);

    // const changeHandler = (event) =>{
    //     newSetTitle(event.target.value);
    // }

    // const clickHandler = () =>{
    //     setTitle(newTitle);
    // }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
        </Card>
    );
}

export default ExpenseItem;