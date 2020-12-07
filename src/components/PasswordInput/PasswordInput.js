import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { LockIcon, OpenedEyeIcon, ClosedEyeIcon } from '../../icons';
import { useStyles } from './styles';

export const PasswordInput = ({ inputPlaceholder, inputValue, onInputChange }) => {
  let [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((state) => showPassword = !state);
  }
  const onChangeHandler = (event) => {
    onInputChange(event.target.value);
    event.target.focus();

  }
  const { maxWidthInput } = useStyles();
  return (
    <Input
      className={maxWidthInput}
      placeholder={inputPlaceholder}
      onChange={onChangeHandler}
      value={inputValue}
      type={showPassword ? 'text' : 'password'}
      startAdornment={
        <InputAdornment position='start'>
          {LockIcon}
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position='end' onClick={handleClickShowPassword}>
          {showPassword ? OpenedEyeIcon : ClosedEyeIcon}
        </InputAdornment>
      }
    />
  );
}