import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const [expenses, setExpenses] = useState([]);
    const addExpenseHandler = (expense) => {
        console.log(expense);
        setExpenses((prevState) => {
            return [expense, ...prevState];
        });
    };

    const deleteExpenseHandler = id => {
        let updatedExpenses = [...expenses].filter((expense) => expense.id !== id);
        setExpenses(updatedExpenses);
      };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} onDeleteExpense={deleteExpenseHandler}/>
        </div>
    );
}

export default App;
