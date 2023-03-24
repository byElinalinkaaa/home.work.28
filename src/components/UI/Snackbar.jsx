import React from 'react'
import { Snackbar as MuiSnackbar, Alert } from '@mui/material'

const Snackbar = ({
  isOpen,
  onClose,
  message,
  severities,
  autoHideDuration,
}) => {
  return (
    <MuiSnackbar
      open={isOpen}
      autoHideDuration={autoHideDuration || 4000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      // action={() =>{}}
    >
      <Alert onClose={onClose} severity={severities} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MuiSnackbar>
  )
}

export default Snackbar
