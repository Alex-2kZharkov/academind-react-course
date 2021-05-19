import css from './ExprenseItem.module.css';
import {ExprenseDate} from "./ExpenseDate";

const ExpenseItem = ({title, amount, date}) => {
    return (
        <div className={css['expense-item']}>
            <ExprenseDate date={date}/>
            <h2>{title}</h2>
            <div className={css['expense-item__price']}>${amount}</div>
        </div>
    )
}

export default ExpenseItem;