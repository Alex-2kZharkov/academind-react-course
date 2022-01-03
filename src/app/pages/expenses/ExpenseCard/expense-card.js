import css from './expense-card.module.css';

const ExpenseCard = (props) => {
  const cardClass = `${css.card} ${props.className}`;
  return <div className={cardClass}>{props.children}</div>;
};
export default ExpenseCard;
