import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: "November 13",
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: "December 11",
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: "December 21",
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: "December 29",
        },
    ];
    return (
        <div className="App">
            <ExpenseItem
                key={expenses[0].id}
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                key={expenses[1].id}
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                key={expenses[2].id}
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                key={expenses[3].id}
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </div>
    );
}

export default App;