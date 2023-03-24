import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMeals } from '../../store/meals/meals.thunks'

export const useFoods = () => {
  const dispatch = useDispatch()
  const [sortDirection, setSortDirection] = useState('ASC')
  const { meals = [], isLoading, error } = useSelector((state) => state.meals)
  //   console.log(isLoading);

  useEffect(() => {
    dispatch(getMeals())
  }, [dispatch])

  const changesetSortDirection = (dir) => {
    setSortDirection(dir)
  }

  const sortedMeals = useMemo(() => {
    const norSorted = [...meals]

    return norSorted.sort((a, b) => {
      if (sortDirection === 'ASC') {
        return a.price - b.price
      }
      return b.price - a.price
    })
  }, [sortDirection, meals])

  return {
    meals: sortedMeals,
    sortDirection,
    changesetSortDirection,
    isLoading,
    error,
  }
}
