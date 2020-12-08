import React, { useState } from 'react';
// components
import Grid from '@material-ui/core/Grid';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import CustomPicker from '../CustomPicker'
import PasswordInput from '../../components/PasswordInput';
import CustomTitle from '../../components/CustomTitle';
// styles
import { useStyles } from './styles';
// icons
import { LukaBox, AwardIcon, UserIcon, HatIcon, MailIcon } from '../../icons';


export const SignUpForm = () =>{
  const { defaultForm, lukaLogo, defaultLink, underLineStyling } = useStyles();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    password: '',
    repassword: '',
    from: '',
    to: '',
  });

  const handleInputChange = (type) => (value) => {
    setUser({...user, [type]: value});
  }

  const onButtonClick = () => {
    console.log('ButtonClick');
    console.log(user);
  }

  return (
    <>
      <div className={lukaLogo}>{LukaBox}</div>
      <form className={defaultForm}>
        <Grid item xs={12} >
          <CustomTitle titleText='Sign up to Luckabox Customer'/>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CustomInput
              inputPlaceholder='First Name'
              inputValue={user.firstName}
              onInputChange={handleInputChange('firstName')}
            >
              { UserIcon }
            </CustomInput>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomInput
              inputPlaceholder='Last Name'
              inputValue={user.lastName}
              onInputChange={handleInputChange('lastName')}
            >
              { UserIcon }
            </CustomInput>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomInput
              inputPlaceholder='Company name'
              inputValue={user.company}
              onInputChange={handleInputChange('company')}
            >
              {AwardIcon}
            </CustomInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <CustomPicker
              datePlaceholder='From'
              onDateChange={handleInputChange('from')}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <CustomPicker
              datePlaceholder='To'
              onDateChange={handleInputChange('to')}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              inputPlaceholder='Phone Number'
              inputValue={user.phone}
              inputType="number"
              onInputChange={handleInputChange('phone')}
            >
              { HatIcon }
            </CustomInput>
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              inputPlaceholder='Your Email'
              inputValue={user.email}
              onInputChange={handleInputChange('email')}
            >
              { MailIcon }
            </CustomInput>
          </Grid>
          <Grid item xs={12} md={6}>
            <PasswordInput
              inputPlaceholder='Create Password'
              inputValue={user.password}
              onInputChange={handleInputChange('password')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PasswordInput
              inputPlaceholder='Repeat Password'
              inputValue={user.repassword}
              onInputChange={handleInputChange('repassword')}
            />
          </Grid>
          <Grid item xs={12} >
            <CustomButton
              buttonText='Get Started - FREE'
              onButtonClick={onButtonClick}
            />
          </Grid>
          <Grid item xs={12}>
            <p className={defaultLink}>By clicking 'Get Started - Free!' I agree to Luckabox <a href='/' className={underLineStyling}>Terms of Service</a></p>
          </Grid>
        </Grid>
      </form>
    </>
  );
}