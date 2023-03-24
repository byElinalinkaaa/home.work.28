import { AppBar, Button, Grid, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../store/auth/auth.thunk';

const menus = [
    {
        path: 'meals',
        title: 'Meals'
    },
    {
        path: 'orders',
        title: 'Orders'
    }
]

export const AdminHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signOutHandler = () => {
        dispatch(signOut())
        navigate('/signin')
    }
    return (
        <AppBar position="static">
        <Toolbar>
            <Grid display='flex' justifyContent='space-between' alignItems='center' sx={{width: '100%', color: '#fff'}}>
            <Grid>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {menus.map(item => (
            <NavLink style={{marginRight: '10px', color: '#FFF'}} key={item.path} to={item.path}>{item.title}</NavLink>
          ))}
            </Grid>
          <Button onClick={signOutHandler} color="inherit">Sign Out</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    );
};

