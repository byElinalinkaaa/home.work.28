import React, { memo, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { fetchApi } from '../../lib/fetchApi'
import MealItem from './meal-item/MealItem'

const Meals = () => {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  const getMeals = async () => {
    try {
      setLoading(true)
      const response = await fetchApi('foods')

      setMeals(response.data)
    } catch {
      setError('failed to Load meals')
    }
    setLoading(false)
  }

  useEffect(() => {
    getMeals()
  }, [])

  return (
    <StyledCard>
      {isLoading && !error && <p>LOADING........</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {meals.map((meal) => {
        // eslint-disable-next-line no-underscore-dangle
        return <MealItem key={meal._id} meal={meal} />
      })}
    </StyledCard>
  )
}

export default memo(Meals)

const StyledCard = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: '16px',
  width: '75%',
  margin: '40px auto',
  padding: '40px',
  color: theme.palette.primary.contrastText,
}))
