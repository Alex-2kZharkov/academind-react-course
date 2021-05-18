import css from './ExprenseItem.module.css';

const ExpenseItem = () => {
    return (
        <div className={css['expense-item']}>
            <div>March 28th 2021</div>
            <h2>Car Insurance</h2>
            <div className={css['expense-item__price']}>$294.57</div>
        </div>
    )
}

export default ExpenseItem;