import css from './Expenses.module.css';
import ExpenseItem from "./ExpenseItem";

export const ExpensesList = props => {
    return (
        <div className={css['expenses-list']}>
            {props.expenses.map(expense => {
                return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
            })}
        </div>
    )
}