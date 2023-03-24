/* eslint-disable import/no-extraneous-dependencies */
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button'
import signUp from '../../store/auth/auth.thunk'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userRole,setUserRole] = useState('USER')



  const submitHandler = ({ email, name, password }) => {
    const data = {
      email,
      name,
      password,
      role: userRole,
    }

    dispatch(signUp(data))
      .unwrap()
      .then(() => navigate('/'))
  }



  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: submitHandler,
  })

  const { values, handleChange, handleSubmit } = formik

  return (
    <MainGrid>
      <GridContainer>
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <TextField
              value={values.name}
              onChange={handleChange}
              label="Name"
              name="name"
              type="text"
            />
            <TextField
              value={values.email}
              onChange={handleChange}
              name="email"
              label="Email"
            />
            <TextField
              value={values.password}
              onChange={handleChange}
              name="password"
              label="Password"
            />
            <TextField
              value={values.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              label="Confirm Password"
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">User Role</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                  onChange={() => setUserRole('USER')}
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                  onChange={() => setUserRole('ADMIN')}
                />
              </RadioGroup>
            </FormControl>

            <Button type="submit">Sign up</Button>
            <Link to="/signin">Have an account</Link>
            <Link to="/">Go Back to main Page</Link>
          </FormGrid>
        </form>
      </GridContainer>
    </MainGrid>
  )
}

export default SignUp

const MainGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '60px',
  marginBottom: '2rem'
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
