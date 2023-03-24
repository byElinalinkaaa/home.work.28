import { store } from '../../store/store'

export const lightTheme = {
  palette: {
    primary: {
      main: '#8a2b06',
      light: '#fff',
      dark: '#481805',
      contrastText: '#000',
    },
    secondary: {
      main: '#5c5957',
      light: '#5c5957',
      dark: '#481805',
      contrasText: '#fff',
    },
    error: {
      main: '#ee1616',
      light: '#ee1616',
      dark: '#ee1616',
      contrasText: '#fff',
    },
    success: {
      main: '#0cec32',
      light: '#0cec32',
      dark: '#0cec32',
      contrasText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
}

export const darkTheme = {
  palette: {
    primary: {
      main: '#383838',
      light: '#9095a6',
      dark: '#545761',
      contrastText: '#fff',
    },
    secondary: {
      main: '#5c5957',
      light: '#5c5957',
      dark: '#481805',
      contrasText: '#fff',
    },
    error: {
      main: '#ee1616',
      light: '#ee1616',
      dark: '#ee1616',
      contrasText: '#fff',
    },
    success: {
      main: '#0cec32',
      light: '#0cec32',
      dark: '#0cec32',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
}

export const getTheme = () => {
  const currentTheme = store.getState().ui.themeMode
  return currentTheme === 'light' ? lightTheme : darkTheme
}
