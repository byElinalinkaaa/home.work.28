import { Button } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'

const MuiButton = ({
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

export default MuiButton

const getBackgroundColor = (variant) => {
  return variant === 'contained' ? '#9b3107' : '#fff'
}

const getBorder = (variant) => {
  return variant === 'contained' ? 'none' : '1px solid #9b3107'
}

const getColor = (variant) => {
  return variant === 'contained' ? '#fff' : '#8A2B06'
}

const getBorderRadius = (borderStyle) => {
  return borderStyle === 'rounded' ? '20px' : '6px'
}

const StyledButton = styled(Button,{
  shouldForwardProp: (propsName) => propsName !== 'borderStyle'
})(({ borderStyle, variant }) => ({
  background: getBackgroundColor(variant),
  margin: '1rem',
  padding: '10px 32px',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: getColor(variant),
  border: getBorder(variant),
  borderRadius: getBorderRadius(borderStyle),
  '&:hover': {
    background: '#7E2A0A',
    color: 'white',
  },
  '&:active': {
    background: '#993108',
  },
  '&:disabled': {
    background: '#CAC6C4',
  },
}))
