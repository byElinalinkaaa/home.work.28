/* eslint-disable no-underscore-dangle */
import { memo } from 'react'
import styledComponents from 'styled-components'
import { styled } from '@mui/material/styles'
import MealItemForm from './MealItemForm'

const MealItem = ({ meal }) => {
  return (
    <Container>
      <StyledInfoContainer>
        <Styledtitle>{meal.title}</Styledtitle>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </StyledInfoContainer>
      <MealItemForm price={meal.price} title={meal.title} id={meal._id}  />
    </Container>
  )
}

export default memo(MealItem)

const StyledInfoContainer = styled('div')(({ theme }) => ({
  marginBottom: '2.25px',

  p: {
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '5px 0px',
  },

  span: {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
    color: theme.palette.primary.main,
  },
}))

const Container = styledComponents.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  padding-bottom: 1rem;

  :last-child {
    border: none;
    margin-bottom: 0;
  }
`

const Styledtitle = styledComponents.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin: 0;
`
