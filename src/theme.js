import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#33DDC3',
    },
    secondary: {
      main: '#efefef',
    },
    success:{
        main:'#b1fad6'
    }
  },
  components: {
    MuiInputBase:{
        styleOverrides:{
            input:{
                fontSize:'25px',
                fontWeight:'600'
            }
        }
    }
  }
});