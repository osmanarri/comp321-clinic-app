import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // you can group all the above states together
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (event) =>{

        setEnteredTitle(event.target.value);
        // return the prev state for (amount + date) and the new value for tilte
        // setUserInput((prevStete) => {
        //     return { ...prevStete, enteredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (event) =>{

        setEnteredAmount(event.target.value);
         // return the prev state for (title + date) and the new value for amount
        //  setUserInput((prevStete) => {
        //     return { ...prevStete, enteredAmount: event.target.value}
        // })
    }
    const dateChangeHandler = (event) =>{

        setEnteredDate(event.target.value);
        // return the prev state for (amount + title) and the new value for date
        // setUserInput((prevStete) => {
        //     return { ...prevStete, enteredDate: event.target.value}
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)

        }
        props.onOsman(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (

        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__controls'>
                        <label>Title</label>
                        <input type="text"
                         value={enteredTitle} 
                         onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__controls'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01"
                         value={enteredAmount}
                        onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__controls'>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31"
                         value={enteredDate} 
                         onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expenss__actions'>
                     <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;