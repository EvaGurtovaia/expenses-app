import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
    const [expenses, setExpenses] = useState([]);
    const addExpenseHandler = (expense) => {
        console.log(expense);
        setExpenses((prevState) => {
            return [expense, ...prevState];
        });
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
