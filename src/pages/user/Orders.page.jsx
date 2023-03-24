/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getOrders } from '../../store/order/order.thunk'

const OrdersPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const { meals } = useSelector((state) => state.orders)
  console.log(meals)
  return (
    <div>
      <StyledList>
        {meals.map((item) =>
          item.items.map((element) => (
            <li>
            <p>{element.title}</p>
            <div>
              <p>${element.price}</p>
              <p>amount:  {element.amount}</p>
            </div>
            </li>
          ))

          // <h3>Order for ${item.totalPrice}</h3>

          )}
      </StyledList>
    </div>
  )
}

export default OrdersPage

const StyledList = styled.ul`
background-color:  #fff;
margin: 0 auto;
margin-top: 2rem;
margin-bottom: 2rem;
padding: 1.5rem;
width: 75%;
border-radius: 12px;

li{
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
  padding: 1rem 1rem 0.5 1rem;
}
`


