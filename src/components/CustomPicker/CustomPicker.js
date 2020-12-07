import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DateIcon } from '../../icons';

export const CustomPicker = ({ datePlaceholder, onDateChange }) => {
  const [selectedDate, handleDateChange] = useState(null);

  const onDateChanged = (date) => {
    handleDateChange(date);
    onDateChange(date);
    
  } 

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Fragment>
      <KeyboardDatePicker
        InputAdornmentProps={{ position: 'start'}}
        keyboardIcon={DateIcon}
        clearable
        value={selectedDate}
        placeholder={datePlaceholder}
        onChange={onDateChanged}
        minDate={new Date()}
        format='MM/dd/yyyy'
      />
    </Fragment>
    </MuiPickersUtilsProvider>
  );
}