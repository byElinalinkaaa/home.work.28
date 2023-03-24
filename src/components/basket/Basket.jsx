import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import { styled } from '@mui/material/styles'
import {
  deleteBasketItem,
  getBasket,
  submitOrder,
  updateBasketItem,
} from '../../store/meals/basket.slice'
import { uiActions } from '../../store/ui/ui.slice'
import BasicModal from '../mui-modal/BasicModal'
import BasketItem from './BasketItem'
import TotalAmount from './TotalAmount'

const Basket = ({ onOpen, onClose }) => {
  const items = useSelector((state) => state.basket.items)
  const dispatch = useDispatch()

  const getTotalPrice = useCallback(() => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    return items.reduce((sum, { price, amount }) => (sum += price * amount), 0)
  }, [items])

  const price = {
    totalPrice: getTotalPrice(),
  }

  const orderSubmitHandler = async () => {
    try {
      await dispatch(submitOrder(price)).unwrap()

      dispatch(
        uiActions.showSnackbar({
          severity: 'success',
          message: 'Order created successfully',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showSnackbar({
          severity: 'error',
          message: 'Failed, try again later',
        })
      )
    } finally {
      onClose()
      getBasket()
    }
  }

  const dec = useCallback(
    (id, amount) => {
      if (amount > 1) {
        dispatch(updateBasketItem({ id, amount: amount - 1 }))
      } else {
        dispatch(deleteBasketItem(id))
      }
    },
    [dispatch]
  )

  const incrementAmount = useCallback(
    (id, amount) => {
      dispatch(updateBasketItem({ id, amount: amount + 1}))
    },
    [dispatch]
  )

  return (
    <BasicModal onOpen={onOpen} onClose={onClose}>
      <StyledContainer>
        <FiwedHeightContainer>
          {items.map((item) => {
            return (
              <BasketItem
                // eslint-disable-next-line no-underscore-dangle
                key={item._id}
                // eslint-disable-next-line no-underscore-dangle
                incrementAmount={() => incrementAmount(item._id, item.amount)}
                // eslint-disable-next-line no-underscore-dangle
                dec={() => dec(item._id, item.amount)}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            )
          })}
        </FiwedHeightContainer>

        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={orderSubmitHandler}
        />
      </StyledContainer>
    </BasicModal>
  )
}

export default Basket

const FiwedHeightContainer = styledComponents.div`
  max-height: 228px;
  overflow-y: scroll;
`

const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: '100%',
  height: '100%',
  padding: '1.5rem 2rem',
}))
