/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { MenuItem, Select } from '@mui/material'
import style from '@emotion/styled'
import React, { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Basket from '../components/basket/Basket'
import Header from '../components/header/Header'
import { useFoods } from '../components/hooks/useFoods'

const UserLayout = () => {
  const [isBasketVisible, setBasketVisible] = useState(false)

  const showBasketHandler = useCallback(() => {
    setBasketVisible((prevState) => !prevState)
  }, [])

  const { sortDirection, changesetSortDirection } =useFoods()

  return (
    <>
      <Header onShowBasket={showBasketHandler} />
      {isBasketVisible && (
        <Basket onOpen={isBasketVisible} onClose={showBasketHandler} />
      )}{' '}
      <Content>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortDirection}
          label="meals"
          fullWidth
          onChange={(e) => changesetSortDirection(e.target.value)}
        >
          <MenuItem value="ASC">Cheaper</MenuItem>
          <MenuItem value="DESC">more expensive</MenuItem>
        </StyledSelect>
        <Outlet/>
      </Content>
    </>
  )
}

export default UserLayout


const Content = style('div')(() => ({
    '&': {
      marginTop: '101px',
    },
  }))
  
  const StyledSelect = style(Select)(({ theme }) => ({
    '&': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrasText,
    },
  }))