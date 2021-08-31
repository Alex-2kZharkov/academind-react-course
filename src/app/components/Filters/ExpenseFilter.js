import React, { useState } from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { DATE_FILTERS } from '../../utils/constants';

const ExpenseFilter = () => {
  const onSelectChange = (event) => {
    setDateFilter(event.target.value);
    console.log(event.target.value);
  };
  const [dateFilter, setDateFilter] = useState(DATE_FILTERS[0]);
  return (
    <React.Fragment>
      <FormControl color={'secondary'}>
        <InputLabel htmlFor="expense-date-filter">Date</InputLabel>
        <Select
          style={{ width: '120px' }}
          onChange={onSelectChange}
          value={dateFilter}
          defaultValue={dateFilter}
          inputProps={{
            name: 'date',
            id: 'expense-date-filter'
          }}
        >
          {DATE_FILTERS.map((date) => (
            <option value={date} key={date}>
              {date}
            </option>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};
export default ExpenseFilter;
