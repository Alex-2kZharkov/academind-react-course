import css from "./Expenses.module.css";
import ExpenseItem from "../Expense/ExpenseItem";
import Card from "../Card/Card";

const Expenses = (props) => {
  return (
    <Card className={css["expenses-list"]}>
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
