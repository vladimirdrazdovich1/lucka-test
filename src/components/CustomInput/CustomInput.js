import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useStyles } from './styles';


export const CustomInput = ({ children, inputPlaceholder, inputValue, onInputChange, inputType='text' }) => {
  const { maxWidthInput } = useStyles();

  const onChangeHandler = (event) => {
    onInputChange(event.target.value);
    event.target.focus()
  }

  return (
    <Input
      className={maxWidthInput}
      value={inputValue}
      type={inputType}
      onChange={onChangeHandler}
      placeholder={inputPlaceholder}
      startAdornment={
        <InputAdornment position='start'>
          { children }
        </InputAdornment>
      }
    />
  );
};