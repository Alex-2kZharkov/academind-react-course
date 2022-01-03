import styled from 'styled-components';
import ExpenseItem from './expense-item';

const StyledExpenseItem = styled(ExpenseItem)`
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.25fr;
  padding: 0.5rem 1rem;
  margin: 1rem 0 2rem;
  background-color: rgb(25, 87, 255);
`;

export default StyledExpenseItem;
