import React from 'react';
import StyledExpenseItem from '../ExpenseItem/expense-item.styles';

const ExpensesList = ({ expenses }) => {
  return expenses.map(({ title, amount, date }) => (
    <StyledExpenseItem
      title={title}
      amount={amount}
      date={date}
      key={Math.random().toString()}
    />
  ));
};

export default ExpensesList;
