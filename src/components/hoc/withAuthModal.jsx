import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MuiButton from '../UI/MuiButton'

export const withAuthModal = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate()
    const [isModalOpen, setModalOpen] = useState(false)

    const goToSignInHandler = () =>{
        setModalOpen(false)
        navigate('/signin')

    }

    return (
      <>
        <Component {...props} showAuthModal={() => setModalOpen(true)} />

        <Dialog
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Not Authorized</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              In Order to complete this action, please sign in
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={goToSignInHandler}>
              Go To Sign In
            </Button>
            <MuiButton onClick={() => setModalOpen(false)} autoFocus>
              OK
            </MuiButton>
          </DialogActions>
        </Dialog>
      </>
    )
  }
  return Wrapper
}
