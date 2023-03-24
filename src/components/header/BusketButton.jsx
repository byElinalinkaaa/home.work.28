import { Button } from '@mui/material'
import { memo } from 'react'
import style from 'styled-components'
import { styled } from '@mui/material/styles'
import { ReactComponent as BasketIcon } from '../../assets/icons/cart.svg'

const BasketButton = ({ count, ...restProps }) => (
  <StyledBasketButton variant="contained" {...restProps}>
    <BasketIcon /> <StyledTitle>Your cart</StyledTitle>
    <CountStyled id="counter">{count || 0}</CountStyled>
  </StyledBasketButton>
)

export default memo(BasketButton)

const StyledBasketButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: '10px 32px',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: 'white',
  border: 'none',
  borderRadius: '30px',
  '&:hover': {
    background: theme.palette.primary.dark,
  },
  '&:active': {
    background: '#993108',
  },
  '&:disabled': {
    background: '#CAC6C4',
  },

  '&.bump': {
    animation: 'bump 300ms ease-out',
  },

  '@keyframes bump': {
    '0%': {
      transform: 'scale(1)',
    },
    '10%': {
      transform: 'scale(0.9)',
    },
    '30%': {
      transform: 'scale(1.1)',
    },
    '50%': {
      transform: 'scale(1.15)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}))

const StyledTitle = style.span`
  margin-left: 12px;
  margin-right: 24px;
`
const CountStyled = style.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`
