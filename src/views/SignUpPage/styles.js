import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  defaultSignUpPage: {
    backgroundColor: '#0F1C37',
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    padding: '2rem',
  },
  '@media (max-width:600px)': {
    defaultSignUpPage: {
      padding: '0 1.5rem',
    },
  },
}));