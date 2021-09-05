import React from 'react';
import css from './AddExpense.module.css';
import { styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import MuiButton from '@material-ui/core/Button';

const Button = styled(MuiButton)(spacing);

const AddExpense = (props) => {
  return (
    <div className={css['add-expense__container']}>
      <Button variant="contained" color="primary" size="large" ml={60}>
        Add expense
      </Button>
    </div>
  );
};
export default AddExpense;
