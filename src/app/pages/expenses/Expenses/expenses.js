import css from './expenses.module.css';
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { DATE_FILTERS } from '../../../utils/constants';
import ExpensesList from '../ExpensesList/expenses-list';
import ExpensesChart from '../ExpensesChart/expenses-chart';
import AddExpense from '../AddExpense/add-expense';
import ExpenseCard from '../ExpenseCard/expense-card';

const RenderedExpenses = ({ expenses, dateFilter }) => {
  if (dateFilter === 'ALL') {
    return <ExpensesList expenses={expenses} />;
  }
  const filteredExpenses = expenses.filter((value) => {
    return dateFilter === value.date.getFullYear().toString();
  });
  return <ExpensesList expenses={filteredExpenses} />;
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
        <ExpenseCard className={css['expenses-list']}>
          <RenderedExpenses expenses={props.expenses} dateFilter={dateFilter} />
        </ExpenseCard>
        <ExpensesChart expenses={props.expenses} />
      </Grid>
    </Grid>
  );
};

export default Expenses;
