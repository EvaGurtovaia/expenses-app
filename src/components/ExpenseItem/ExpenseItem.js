import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card";

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                {" "}
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={() => props.onDelete(props.id)} className="button-to__delete">
                <i class="fas fa-trash" />
            </button>
        </Card>
    );
}

export default ExpenseItem;
