import ExpenseDate from '../ExpenseDate/expense-date';
import styled from 'styled-components';
import ExpenseCard from '../ExpenseCard/expense-card';

const H2 = styled.h2`
  font-size: 1rem;
  margin: 0 1rem;
  color: #ffffff;
  align-self: center;
`;

const PriceDiv = styled.div`
  align-self: center;
  min-width: 8rem;
  padding: 0.5rem;
  border-radius: 12px;
  border: 1px solid #ffffff;
  font-size: 1rem;
  font-weight: bold;
  color: #61dafb;
  text-align: center;
  background-color: #1f1f1f;

  @media (min-width: 580px) {
    padding: 0.5rem 1.5rem;
  }
`;

export const ExpenseItem = ({ className, title, amount, date }) => {
  return (
    <ExpenseCard className={className}>
      <ExpenseDate date={date} />
      <H2 className={className}>{title}</H2>
      <PriceDiv>${amount}</PriceDiv>
    </ExpenseCard>
  );
};

export default ExpenseItem;
