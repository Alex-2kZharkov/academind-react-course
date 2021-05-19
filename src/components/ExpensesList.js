import css from './Expenses.module.css';
import ExpenseItem from "./ExpenseItem";
import {Card} from "./Card";

export const ExpensesList = props => {
    return (
        <Card className={css['expenses-list']}>
            {props.expenses.map(expense => {
                return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
            })}
        </Card>
    )
}