import { Button } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import { styled } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import { getBasket } from '../../store/meals/basket.slice'
import { uiActions } from '../../store/ui/ui.slice'

import BasketButton from './BusketButton'
import { signOut } from '../../store/auth/auth.thunk'
import { withAuthModal } from '../hoc/withAuthModal'
import MuiButton from '../UI/MuiButton'

const Header = ({ onShowBasket, showAuthModal }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthorized = useSelector((state) => state.auth.isAuthorized)
  const items = useSelector((state) => state.basket.items)
  const [animationClass, setAnimationClass] = useState('')

  const themeMode = useSelector((state) => state.ui.themeMode)

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  const calculateTotalAmount = useCallback(() => {
    const sum = items.reduce((s, item) => {
      return s + item.amount
    }, 0)
    return sum
  }, [items])
  useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
      setAnimationClass('')

      return () => {
        clearTimeout(id)
      }
    }, 600)
  }, [items])

  const theme = themeMode === 'light' ? 'dark' : 'light'
  const themeChangeHandler = () => {
    dispatch(uiActions.changeTheme(theme))
  }

  const signOutHandler = () => {
    dispatch(signOut())
    navigate('/signin')
  }

  const signInHandler = () => {
    navigate('/signin')
  }

  const showBasketHandler = () => {
    if (!isAuthorized) {
      return showAuthModal()
    }
    return onShowBasket()
  }

  const goToOrdersPageHandler  = () =>{
    navigate('/orders')
  }

  return (
    <StyledHeaderContainer>
      <Link to="/">
        <Logo>ReactMeals</Logo>
      </Link>

      <StyledInnerContrainer>
        <BasketButton
          onClick={showBasketHandler}
          className={animationClass}
          count={calculateTotalAmount()}
        />
        <MuiButton onClick={goToOrdersPageHandler} variant='outlined'>My Orders</MuiButton>
        <StyledButton
          variant="contained"
          onClick={themeChangeHandler}
          className={animationClass}
          count={calculateTotalAmount()}
          sx={{ color: '#fff' }}
        >
          {themeMode === 'light' ? 'Turn Dark Mode' : 'Turn Light Mode'}
        </StyledButton>

        {isAuthorized ? (
          <Button sx={{ color: '#fff' }} onClick={signOutHandler}>
            Sign Out
          </Button>
        ) : (
          <Button sx={{ color: '#fff' }} onClick={signInHandler}>
            Sign In
          </Button>
        )}
      </StyledInnerContrainer>
    </StyledHeaderContainer>
  )
}

export default withAuthModal(Header)

const StyledHeaderContainer = styled('nav')(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  top: '0',
  zIndex: '1',
  height: '101px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '120px',
  paddingRight: '120px',
}))

const StyledInnerContrainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
}))

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  marginLeft: '3rem',
}))

const Logo = styledComponents.p`
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  font-family: Poppins, sans-serif;
`
