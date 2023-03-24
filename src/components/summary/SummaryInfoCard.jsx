import React, { memo } from 'react'
import styledComponents from 'styled-components'

import { styled } from '@mui/material/styles'

const SummaryInfoCard = () => {
  return (
    <StyledCard>
      <StyledHeading>Delicious Food, Delivered To You</StyledHeading>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </StyledCard>
  )
}

export default memo(SummaryInfoCard)

const StyledCard = styled('div')(({ theme }) => ({
  width: '53.375rem',
  textAlign: 'center',
  padding: '2.25rem 3.375rem',
  position: 'relative',
  margin: '-12rem auto auto',
  bottom: '0',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  borderRadius: '14px',
  boxShadow: '0 1px 18px 10px rgb(0, 0, 0 ,25%)',
}))

const StyledHeading = styledComponents.h1`
    font-weight: 600;
font-size: 36px;
line-height: 54px;
`
