import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';

const ExpenseFilter = ({ currentValue, options, onFilterChange }) => {
  return (
    <>
      <FormControl color={'secondary'}>
        <InputLabel
          htmlFor="expense-date-filter"
          style={{ fontSize: '1.5rem' }}
          mb={30}
        >
          Date filter:
        </InputLabel>
        <Select
          style={{ width: '120px', marginTop: 25 }}
          onChange={onFilterChange}
          value={currentValue}
          defaultValue={currentValue}
          inputProps={{
            name: 'date',
            id: 'expense-date-filter'
          }}
        >
          {options.map((date) => (
            <option value={date} key={date}>
              {date}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default ExpenseFilter;
