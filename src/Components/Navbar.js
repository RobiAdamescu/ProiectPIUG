import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Stack,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

function Navbar() {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const buttonStyle = {
    color: darkMode ? 'white' : 'black',
    textDecoration: 'none',
    fontSize: '14px',
  };

  const menuButtonStyle = {
    textDecoration: 'none',
    color: darkMode ? 'white' : 'black',
    transition: 'color 0.3s ease, font-size 0.3s ease',
    fontSize: '14px',
    padding: '0.5px',
  };

  const renderNavButtons = () => (
    <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px' }}>
      <NavLink to="/" activeClassName="active" style={buttonStyle}>
        <Button color="inherit">Home</Button>
      </NavLink>
      <NavLink to="/products" activeClassName="active" style={buttonStyle}>
        <Button color="inherit">Products</Button>
      </NavLink>
      <NavLink to="/contact" activeClassName="active" style={buttonStyle}>
        <Button color="inherit">Contact</Button>
      </NavLink>
      <NavLink to="/qa" activeClassName="active" style={buttonStyle}>
        <Button color="inherit">Q&A</Button>
      </NavLink>
    </div>
  );

  const renderMenuButtons = () => (
    <div
      sx={{
        position: 'fixed',
        top: '64px',
        left: 0,
        width: '100%',
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        padding: '8px',
        backgroundColor: darkMode ? '#333' : 'transparent',
      }}
    >
      <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '9px', color: 'white' }}>
        <NavLink to="/" activeClassName="active" style={menuButtonStyle} className="menu-list-item">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to="/products" activeClassName="active" style={menuButtonStyle} className="menu-list-item">
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
        </NavLink>
        <NavLink to="/contact" activeClassName="active" style={menuButtonStyle} className="menu-list-item">
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </NavLink>
        <NavLink to="/qa" activeClassName="active" style={menuButtonStyle} className="menu-list-item">
          <ListItem button>
            <ListItemText primary="Q&A" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction='row' alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              CarCharms
            </Typography>
            {!isMobile && (
              <IconButton onClick={toggleDarkMode} className="dark-mode-toggle-button">
                {darkMode ? <Brightness4Icon /> : <WbSunnyIcon />}
              </IconButton>
            )}
          </Stack>
          {!isMobile && renderNavButtons()}
          {isMobile && (
            <>
              <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)} color="inherit">
                <MenuIcon />
              </IconButton>
              <IconButton onClick={toggleDarkMode} className="dark-mode-toggle-button">
                {darkMode ? <Brightness4Icon /> : <WbSunnyIcon />}
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && isMenuOpen && renderMenuButtons()}
    </>
  );
}

export default Navbar;
