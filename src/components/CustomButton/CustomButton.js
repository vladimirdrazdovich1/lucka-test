import React from 'react';
// components
import Button from '@material-ui/core/Button';
//styles
import { withStyles } from '@material-ui/core/styles';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    width: '100%',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#00B796',
    borderColor: '#00B796',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#059f83',
      borderColor: '#059f83',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00B796',
      borderColor: '#00B796',
    },
    
  },
  '@media (max-width:500px)': {
    root: {
      padding: '3px 6px',
      fontSize: 14,
    },
  },
})(Button);


export const CustomButton = ({ buttonText, onButtonClick }) => {
  return (
    <BootstrapButton
      disableRipple
      className='d-flex'
      variant='contained'
      color='primary'
      onClick={onButtonClick}
    >
      { buttonText }
    </BootstrapButton>
  );
}