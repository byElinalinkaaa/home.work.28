/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from '../components/header/admin-header/AdminHeader'

const AdminLayout = () => {
  return <div>
    <AdminHeader/>
    <Grid >
      <Outlet/>
    </Grid>
  </div>
}

export default AdminLayout
