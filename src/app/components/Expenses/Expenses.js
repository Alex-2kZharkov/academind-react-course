import css from './Expenses.module.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import React, { useState } from 'react';
import ExpenseFilter from '../Filters/ExpenseFilter';
import { Grid } from '@material-ui/core';
import { DATE_FILTERS } from '../../utils/constants';

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
          {props.expenses.map(({ title, amount, date }) => {
            const component = (
              <ExpenseItem
                title={title}
                amount={amount}
                date={date}
                key={Math.random().toString()}
              />
            );
            if (dateFilter === 'None') return component;
            if (dateFilter === new Date(date).getFullYear().toString()) {
              return;
            }
            return null;
          })}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Expenses;
