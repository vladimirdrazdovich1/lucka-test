import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  defaultTypography: {
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '36px',
    padding: '0.5rem 0 1.3rem 0'
  },
  preTypography: {
    fontFamily: 'Poppins, sans-serif',
    color: '#B5B5BE',
    textAlign: 'center',
    padding: 0
  },
    '@media (max-width:360px)': {
      defaultTypography: {
        fontSize: '18px',
        padding: '0.5rem 0 1rem 0',
      },
      preTypography: {
        textAlign: 'center',
        fontSize: '14px',
      },
    },
}));