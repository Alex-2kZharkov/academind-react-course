import css from './Expenses.module.css';
import ExpenseItem from '../Expense/ExpenseItem';
import Card from '../Card/Card';
import React from 'react';
import ExpenseFilter from '../Filters/ExpenseFilter';
import { Grid } from '@material-ui/core';

const Expenses = (props) => {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item lg={12}>
        <ExpenseFilter />
        <Card className={css['expenses-list']}>
          {props.expenses.map((expense) => {
            return (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={Math.random().toString()}
              />
            );
          })}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Expenses;
