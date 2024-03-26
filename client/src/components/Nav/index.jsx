import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import myLogo from "../../../public/images/logo.png";
import "./app.css";

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const renderNavigationLinks = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <Button component={Link} to="/shop" color="inherit">Products</Button>
          <Button component={Link} to="/orderHistory" color="inherit">Order History</Button>
          <Button color="inherit" onClick={() => Auth.logout()}>Logout</Button>
        </>
      );
    } else {
      return (
        <>
          <Button component={Link} to="/signup" color="inherit">Signup</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </>
      );
    }
  };

  const renderDrawerLinks = () => {
    const links = Auth.loggedIn() ? [
      { name: 'Products', path: '/shop' },
      { name: 'Order History', path: '/orderHistory' },
      { name: 'Logout', action: () => Auth.logout(), path: '/' },
    ] : [
      { name: 'Signup', path: '/signup' },
      { name: 'Login', path: '/login' },
    ];

    return (
      <List>
        {links.map((link, index) => (
          <ListItem button key={index} component={Link} to={link.path} onClick={link.action ? () => {link.action(); setDrawerOpen(false);} : () => setDrawerOpen(false)} sx={{ justifyContent: 'center' }}>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <AppBar position="static" className="myNav">
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, fontWeight: "bold", textDecoration: "none", color: "inherit" }}>
          <img className="logo" src={myLogo} alt="AstroBaby Logo" style={{ width: "100px", marginTop: "10px" }} />
        </Typography>

        {!isMobile ? renderNavigationLinks() : null}

        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
          >
            {renderDrawerLinks()}
          </Box>
        </Drawer>

        <Button color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;


// import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the ShoppingCart icon from MUI icons

// import myLogo from '../../../public/images/logo.png';

// import './app.css';

// function Nav() {
//     // Define a function to display the authenticated or guest navigation links
//     function showNavigation() {
//         if (Auth.loggedIn()) {
//             return (
//                 <>
//                     <Button component={Link} to="/shop" color="inherit">
//                         Products
//                     </Button>
//                     <Button component={Link} to="/orderHistory" color="inherit">
//                         Order History
//                     </Button>
//                     <Button color="inherit" onClick={() => Auth.logout()}>
//                         Logout
//                     </Button>
//                 </>
//             );
//         } else {
//             return (
//                 <>
//                     <Button component={Link} to="/signup" color="inherit">
//                         Signup
//                     </Button>
//                     <Button component={Link} to="/login" color="inherit">
//                         Login
//                     </Button>
//                 </>
//             );
//         }
//     }

//     return (
//         <AppBar position="static" className="myNav">
//             <Toolbar style={{ fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif", color: "white" }}>
//                 <Typography variant="h2" component={Link} to="/" style={{ flexGrow: 1, fontWeight: "bold" }}>
//                     <img className="logo" src={myLogo} alt="" style={{ width: '100px', marginTop: '10px' }} />
//                 </Typography>
//                 {showNavigation()}
//                 {/* Add Cart Icon here */}
//                 <Button color="inherit" component={Link} to="/cart">
//                     <ShoppingCartIcon />
//                     {/* If you're tracking cart item count, display it here */}
//                 </Button>
//             </Toolbar>
//         </AppBar>
//     );
// }

// export default Nav;
