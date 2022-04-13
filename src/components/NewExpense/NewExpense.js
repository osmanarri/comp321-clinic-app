import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    // state to open and close the form
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAsser(expenseData);
        // close the form
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }


    return (

        <div className="new-expense">
            {isEditing && <ExpenseForm onOsman={saveExpenseDateHandler}
            onCancel={stopEditingHandler}
            />}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense;