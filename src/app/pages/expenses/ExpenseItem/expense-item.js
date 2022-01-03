import css from './expense-item.module.css';
import ExpenseDate from '../ExpenseDate/expense-date';
import styled from 'styled-components';
import ExpenseCard from '../ExpenseCard/expense-card';

export const ExpenseItem = ({ className, title, amount, date }) => {
  const H2 = styled.h2`
    font-size: 1rem;
    margin: 0 1rem;
    color: white;
    align-self: center;
  `;

  return (
    <ExpenseCard className={className}>
      <ExpenseDate date={date} />
      <H2 className={className}>{title}</H2>
      <div className={css['expense-item__price']}>${amount}</div>
    </ExpenseCard>
  );
};

export default ExpenseItem;
