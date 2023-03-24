import React, { memo, useContext } from 'react'
import styled from 'styled-components'
import BackgroundImg from '../../assets/images/summary-background.jpg'
import { BasketContext } from '../../store/BasketContext'
import Basket from '../basket/Basket'
import SummaryInfoCard from './SummaryInfoCard'

const Summary = () => {
  const { showBasket } = useContext(BasketContext)

  return (
    <>
      {showBasket && <Basket />}
      <Container>
        <StyledImg src={BackgroundImg} alt="" />
        <SummaryInfoCard />
      </Container>
    </>
  )
}

export default memo(Summary)

const Container = styled.div`
  height: 527px;
  position: relative;
`

const StyledImg = styled.img`
  height: 432px;
  width: 100%;
`
