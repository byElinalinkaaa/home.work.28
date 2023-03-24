import React from 'react'
import styled from 'styled-components'

const Button = ({
  children,
  variant = 'contained',
  borderStyle = 'rounded',
  ...restProps
}) => {
  return (
    <StyledButton {...restProps} borderStyle={borderStyle} variant={variant}>
      {children}
    </StyledButton>
  )
}

export default Button

const getBackgroundColor = (props) => {
  return props.variant === 'contained' ? '#9b3107' : '#fff'
}

const getBorder = (props) => {
  return props.variant === 'contained' ? 'none' : '1px solid #9b3107'
}

const getColor = (props) => {
  return props.variant === 'contained' ? '#fff' : '#8A2B06'
}

const getBorderRadius = (props) => {
  return props.borderStyle === 'rounded' ? '20px' : '6px'
}

const StyledButton = styled.button`
  background: ${(props) => getBackgroundColor(props)};
  border-radius: ${getBorderRadius};
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${getColor};
  border: ${getBorder};
  :hover {
    background: #7e2a0a;
    color: #fff;
  }
  :active {
    background: #993108;
  }
  :disabled {
    background: #cac6c4;
  }
`
