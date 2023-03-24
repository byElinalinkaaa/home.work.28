/* eslint-disable import/no-extraneous-dependencies */
import { Grid, TextField, styled, Typography } from '@mui/material'

import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button'
import { signIn } from '../../store/auth/auth.thunk'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const submitHandler = async ({ email, password }) => {
    try {
      const loginData = {
        email,
        password,
      }
      await dispatch(signIn(loginData))
        .unwrap()
        .then(() => navigate('/'))
        .catch((e) => setError(e.response.data.message))
    } catch (er) {
      // eslint-disable-next-line no-console
      console.log(er)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submitHandler,
  })

  const { values, handleChange, handleSubmit } = formik

  const isEmailValid = () => {
    return (
      values.email.length === 0 ||
      (values.email.length > 0 && !values.email.includes('@'))
    )
  }

  const isPasswordValid = () => {
    return (
      values.password.length === 0 ||
      (values.password.length > 0 && values.password >= 6)
    )
  }

  return (
    <MainGrid>
      <GridContainer>
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <TextField
              error={!isEmailValid()}
              value={values.email}
              onChange={handleChange}
              label="Email"
              name="email"
            />
            <TextField
              error={!isPasswordValid()}
              value={values.password}
              onChange={handleChange}
              label="Password"
              name="password"
              sx={{ margin: '15px 0' }}
            />
            {error && (
              <Typography
                textAlign="center"
                sx={{ color: (theme) => theme.palette.error.main, margin: '10px' }}
              >
                {error}
              </Typography>
            )}
            <Button style={{ margin: '0px 15px' }} type="submit">Sign In</Button>
            <Link to="/signup">{`Don't have account`}</Link>
            <Link to="/">Go Back to main Page</Link>
          </FormGrid>
        </form>
      </GridContainer>
    </MainGrid>
  )
}

export default SignIn

const MainGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '100px',
}))

const GridContainer = styled(Grid)(() => ({
  background: '#fff',
  width: '500px',
  padding: '20px',
}))

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}))
