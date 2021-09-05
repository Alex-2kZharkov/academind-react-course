import css from './Expenses.module.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import React, { useState } from 'react';
import ExpenseFilter from '../Filters/ExpenseFilter';
import { Grid } from '@material-ui/core';
import { DATE_FILTERS } from '../../utils/constants';

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
  const onFilterChange = (event) => {
    setDateFilter(event.target.value);
  };
  const [dateFilter, setDateFilter] = useState(DATE_FILTERS[0]);
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item lg={12}>
        <ExpenseFilter
          options={DATE_FILTERS}
          currentValue={dateFilter}
          onFilterChange={onFilterChange}
        />
        <Card className={css['expenses-list']}>
          <RenderedExpenses expenses={props.expenses} dateFilter={dateFilter} />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Expenses;
