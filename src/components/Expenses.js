import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    return (
        <div>
           
            <Card className="expenses">
            <ExpensesFilter />
                <ExpenseItem
                    key={props.expenses[0].id}
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    key={props.expenses[1].id}
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    key={props.expenses[2].id}
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
                <ExpenseItem
                    key={props.expenses[3].id}
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;
