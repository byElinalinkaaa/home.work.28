import { useMemo } from 'react'
import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material'
import { HashRouter } from 'react-router-dom'
import { store } from './store/store'
import Snackbar from './components/UI/Snackbar'
import { uiActions } from './store/ui/ui.slice'
import { darkTheme, lightTheme } from './lib/constants/theme'
import Routes from './routes/Routes'

function AppContent() {
  const dispatch = useDispatch()

  const snackbar = useSelector((state) => state.ui.snackbar)
  const themeMode = useSelector((state) => state.ui.themeMode)

  const theme = useMemo(() => {
    const currentTheme =
      themeMode === 'light'
        ? {
            ...lightTheme,
          }
        : { ...darkTheme }

    return createTheme(currentTheme)
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      {/* <Header onShowBasket={showBasketHnadler} /> */}

      <Snackbar
        isOpen={snackbar.isOpen}
        message={snackbar.message}
        severities={snackbar.severity}
        onClose={() => {
          dispatch(uiActions.closeSnackbar())
        }}
      />
      <Routes />
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </HashRouter>
  )
}

export default App

// const Content = styled.div`
//   margin-top: 101px;
// `;

// GET /foods

// Headers: { UserID: "your_name"  }
// GET /basket
// Headers: { UserID: "your_name"  }
// POST /foods/:foodId/addToBasket
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }
// PUT /basketItem/:id/update
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
