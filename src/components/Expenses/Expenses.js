import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "../Expenses/Expenses.css";
import Card from "../Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const onDelete = props.onDeleteExpense;

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                <ExpensesChart expenses={filteredExpenses} />
                {filteredExpenses.length === 0 ? (
                    <p>No expenses found</p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            id={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            onDelete={onDelete}
                        />
                    ))
                )}
            </Card>
        </div>
    );
}

export default Expenses;
