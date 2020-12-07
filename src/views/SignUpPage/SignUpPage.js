import React from 'react';
import Grid from '@material-ui/core/Grid';
import SignUpForm from '../../components/SignUpForm';
import { useStyles } from './styles';

export const SignUpPage = () =>{
  const { defaultSignUpPage } = useStyles();
  return (
    <div className={defaultSignUpPage}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
          <SignUpForm/>
        </Grid>
      </Grid>
    </div>
  );
}