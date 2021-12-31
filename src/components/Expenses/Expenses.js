import { useState } from "react";

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const yearFilterHandler = (selectedYear) => {
        // console.log(`Expenses.js: ${selectedYear}`);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onYearFilter={yearFilterHandler} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;