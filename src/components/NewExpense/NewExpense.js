import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    // yields a random ID, a string, of 7 alphanumeric characters (7 digit number in base 36)
    const randomID = () => Math.floor(Math.random() * 7.8e10).toString(36).padStart(7, '0');

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: randomID()
        }

        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;