import React, { useState } from 'react';
import css from './AddExpense.module.css';
import AddExpenseButton from './AddExpenseButton/AddExpenseButton';
import { TextField } from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const AddExpense = (props) => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const toggleFormVisibility = () => setIsFormOpened(!isFormOpened);

  return (
    <div className={css['add-expense__container']}>
      {isFormOpened && (
        <form>
          <TextField
            id="add-expense-title"
            label="Title"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="add-expense-date"
              label="Date picker inline"
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              style={{ marginLeft: 10 }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="add-expense-amount"
            label="Amount"
            placeholder="Placeholder"
            margin="normal"
            style={{ marginLeft: 16 }}
          />
        </form>
      )}
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}
      >
        {isFormOpened && (
          <AddExpenseButton
            onButtonClick={toggleFormVisibility}
            content={'Cancel'}
          />
        )}
        <AddExpenseButton
          onButtonClick={toggleFormVisibility}
          content={'Add expense'}
          style={{ marginLeft: 8 }}
        />
      </div>
    </div>
  );
};
export default AddExpense;
