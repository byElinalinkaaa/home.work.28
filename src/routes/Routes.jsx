/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { useSelector } from 'react-redux'
import { Routes as Router, Route } from 'react-router-dom'
import { Typography } from '@mui/material'
import UserLayout from '../layout/UserLayout'
import MealsPage from '../pages/user/Meals.page'
import SignUp from '../pages/user/SignUp.page'
import SignIn from '../pages/user/SignIn.page'
import AdminLayout from '../layout/AdminLayout'
import { Meals as AdminMeals } from '../pages/admin/Meals.page'
import Orders from '../pages/admin/Orders.page'
import { ProtectedRoutes } from './ProtectedRoutes'
import userRoles from '../lib/constants/common'
import OrdersPage from '../pages/user/Orders.page'

const Routes = () => {
  const role = useSelector((state) => state.auth.user.role)

  const isAllowed = (roles) => {
    return roles.includes(role)
  }
  return (
    <Router>
      <Route
        path="/"
        element={
          <ProtectedRoutes
            isAllowed={isAllowed([userRoles.GUEST, userRoles.USER])}
            fallBackPath="admin/meals"
            component={UserLayout}
          />
        }
      >
        <Route
          index
          element={
            <ProtectedRoutes
              isAllowed={isAllowed([userRoles.GUEST, userRoles.USER])}
              fallBackPath={role === userRoles.ADMIN ? 'admin/meals' : '/'}
              component={MealsPage}
            />
          }
        />
        <Route
          path="signup"
          element={
            <ProtectedRoutes
              isAllowed={isAllowed([userRoles.GUEST])}
              fallBackPath={role === userRoles.ADMIN ? 'admin/meals' : '/'}
              component={SignUp}
            />
          }
        />
        <Route
          path="signin"
          element={
            <ProtectedRoutes
              isAllowed={isAllowed([userRoles.GUEST])}
              fallBackPath={role === userRoles.ADMIN ? 'admin/meals' : '/'}
              component={SignIn}
            />
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoutes
              isAllowed={isAllowed([ userRoles.USER])}
              fallBackPath={role === userRoles.ADMIN ? 'admin/meals' : '/'}
              component={OrdersPage}
            />
          }
        />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoutes
            isAllowed={isAllowed([userRoles.ADMIN])}
            fallBackPath="/"
            component={AdminLayout}
          />
        }
      >
        <Route
          path="meals"
          element={
            <ProtectedRoutes
              isAllowed={isAllowed([userRoles.ADMIN])}
              fallBackPath="/"
              component={AdminMeals}
            />
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoutes
              isAllowed={isAllowed([userRoles.ADMIN])}
              fallBackPath="/"
              component={Orders}
            />
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Typography sx={{ color: '#e0360b' }}>PAGE NOT FOUND!!!</Typography>
        }
      />
    </Router>
  )
}

export default Routes
