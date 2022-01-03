import css from './expenses.module.css';
import ExpenseItem from '../expense-item/ExpenseItem';
import Card from '../../Card/Card';
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { DATE_FILTERS } from '../../../utils/constants';
import AddExpense from '../add-expense/AddExpense';
import ExpensesChart from './ExpensesChart';
import styled from 'styled-components';

const StyledExpenseItem = styled(ExpenseItem)`
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.25fr;
  padding: 0.5rem 1rem;
  margin: 1rem 0 2rem;
  background-color: rgb(25, 87, 255);
`;

const RenderedExpenses = ({ expenses, dateFilter }) => {
  if (dateFilter === 'ALL') {
    return ExpensesList(expenses);
  }
  const filteredExpenses = expenses.filter((value) => {
    return dateFilter === value.date.getFullYear().toString();
  });
  return ExpensesList(filteredExpenses);
};

const Expenses = (props) => {
  const [dateFilter] = useState(DATE_FILTERS[0]);
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item lg={12}>
        <AddExpense />
        <Card className={css['expenses-list']}>
          <RenderedExpenses expenses={props.expenses} dateFilter={dateFilter} />
        </Card>
        <ExpensesChart expenses={props.expenses} />
      </Grid>
    </Grid>
  );
};

export default Expenses;
