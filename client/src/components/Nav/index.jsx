import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the ShoppingCart icon from MUI icons

import myLogo from '../../../public/images/logo.png';

import './app.css';

function Nav() {
    // Define a function to display the authenticated or guest navigation links
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <>
                    <Button component={Link} to="/shop" color="inherit">
                        Products
                    </Button>
                    <Button component={Link} to="/orderHistory" color="inherit">
                        Order History
                    </Button>
                    <Button color="inherit" onClick={() => Auth.logout()}>
                        Logout
                    </Button>
                </>
            );
        } else {
            return (
                <>
                    <Button component={Link} to="/signup" color="inherit">
                        Signup
                    </Button>
                    <Button component={Link} to="/login" color="inherit">
                        Login
                    </Button>
                </>
            );
        }
    }

    return (
        <AppBar position="static" className="myNav">
            <Toolbar style={{ fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif", color: "white" }}>
                <Typography variant="h2" component={Link} to="/" style={{ flexGrow: 1, fontWeight: "bold" }}>
                    <img className="logo" src={myLogo} alt="" style={{ width: '70px', marginTop: '10px' }} />
                </Typography>
                {showNavigation()}
                {/* Add Cart Icon here */}
                <Button color="inherit" component={Link} to="/cart">
                    <ShoppingCartIcon />
                    {/* If you're tracking cart item count, display it here */}
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Nav;
