import React from 'react';
// components
import Grid from '@material-ui/core/Grid';
import SignUpForm from '../../components/SignUpForm';
// styles
import { useStyles } from './styles';

export const SignUpPage = () =>{
  const { defaultSignUpPage } = useStyles();
  return (
    <div className={defaultSignUpPage}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <SignUpForm/>
        </Grid>
      </Grid>
    </div>
  );
}