import css from './Expenses.module.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { DATE_FILTERS } from '../../utils/constants';
import AddExpense from './AddExpense/AddExpense';
import ExpensesChart from './ExpensesChart';

const mapExpenses = (expenses) => {
  return expenses.map(({ title, amount, date }) => (
    <ExpenseItem
      title={title}
      amount={amount}
      date={date}
      key={Math.random().toString()}
    />
  ));
};

const RenderedExpenses = ({ expenses, dateFilter }) => {
  if (dateFilter === 'None') {
    return mapExpenses(expenses);
  }
  const filteredExpenses = expenses.filter((value) => {
    return dateFilter === value.date.getFullYear().toString();
  });
  return mapExpenses(filteredExpenses);
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
