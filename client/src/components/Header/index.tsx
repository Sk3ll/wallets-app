/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { Header as HeaderConstants, HeaderUserMenu } from '../../utils/constants';

interface HeaderProps {
  isAuth?: boolean;
  isNavBar?: boolean;
}

export const Header: FC<HeaderProps> = ({ isAuth = false, isNavBar = false }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {isNavBar && (
            <IconButton edge='start' color='inherit' aria-label='menu' onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant='h6' noWrap sx={{ flexGrow: 1 }}>
            {HeaderConstants.Title}
          </Typography>
          {isAuth && (
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {Object.values(HeaderUserMenu).map((menuItem) => (
                  <MenuItem key={`header-menu-item-${menuItem}`} onClick={handleClose}>
                    {menuItem}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
