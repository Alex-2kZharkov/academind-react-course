import css from './ExprenseItem.module.css';
import {ExpenseDate} from "./ExpenseDate";
import {Card} from "./Card";

const ExpenseItem = ({title, amount, date}) => {
    return (
        <Card className={css['expense-item']}>
            <ExpenseDate date={date}/>
            <h2>{title}</h2>
            <div className={css['expense-item__price']}>${amount}</div>
        </Card>
    )
}

export default ExpenseItem;