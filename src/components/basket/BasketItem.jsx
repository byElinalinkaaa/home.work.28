import { memo } from 'react'
import styledComponents from 'styled-components'
import { styled } from '@mui/material/styles'
import MuiButton from '../UI/MuiButton'

const BasketItem = ({ title, price, amount, dec, incrementAmount }) => {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmount>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmount>
        <CounterContainer>
          <MuiButton onClick={dec} borderStyle="squared" variant="outlined">
            -
          </MuiButton>
          <MuiButton
            onClick={incrementAmount}
            borderStyle="squared"
            variant="outlined"
          >
            +
          </MuiButton>
        </CounterContainer>
      </Content>
    </StyledContainer>
  )
}

export default memo(BasketItem)

const StyledContainer = styled('div')(({ theme }) => ({
  padding: '1.5rem 0',
  width: '100%',
  color: theme.palette.primary.contrastText,
}))

const Title = styledComponents.p`
  margin: 0 0 12px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`

const Price = styledComponents.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #ad5502;
  margin: 0;
`

const Amount = styledComponents.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: block;
  padding: 4px 10px;
  border: 1px solid gray;
`

const PriceAndAmount = styledComponents.div`
  display: flex;
  align-items: center;
  width: 155px;
  justify-content: space-between;
`

const CounterContainer = styledComponents.div`
  gap: 14px;
  display: flex;
`

const Content = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
