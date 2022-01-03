import { styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import MuiButton from '@material-ui/core/Button';
import React from 'react';

const Button = styled(MuiButton)(spacing);

const AddExpenseButton = ({ content, onButtonClick, style }) => {
  return (
    <Button
      onClick={onButtonClick}
      variant="contained"
      color="primary"
      size="large"
      style={style}
    >
      {content}
    </Button>
  );
};

export default AddExpenseButton;
