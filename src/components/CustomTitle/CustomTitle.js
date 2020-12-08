import React from 'react';
// components
import Typography from '@material-ui/core/Typography';
// styles
import { useStyles } from './styles';

export const CustomTitle = ({ titleText }) => {
  const { defaultTypography, preTypography } = useStyles();
  return (
    <>
    <Typography className={preTypography} variant='subtitle1' gutterBottom>
        GET STARTED 
    </Typography>
      <Typography className={defaultTypography} variant='h1' component='h1' gutterBottom >
        Sign up to Luckabox Customer
      </Typography>
    </>
  );
}