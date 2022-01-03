import css from './ExprenseItem.module.css';
import ExpenseDate from '../expense-date/ExpenseDate';
import Card from '../../Card/Card';
import styled from 'styled-components';

export const ExpenseItem = ({ className, title, amount, date }) => {
  const H2 = styled.h2`
    font-size: 1rem;
    margin: 0 1rem;
    color: white;
    align-self: center;
  `;

  return (
    <Card className={className}>
      <ExpenseDate date={date} />
      <H2 className={className}>{title}</H2>
      <div className={css['expense-item__price']}>${amount}</div>
    </Card>
  );
};

export default ExpenseItem;
