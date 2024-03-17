import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    // function showNavigation() {
    //     if (Auth.loggedIn()) {
    //         return (
    //             <ul className="flex-row">
    //                 <li className="mx-1">
    //                     <Link to="/orderHistory">Order History</Link>
    //                 </li>
    //                 <li className="mx-1">
    //                     <Button color="inherit" onClick={() => Auth.logout()}>
    //                         Logout
    //                     </Button>
    //                 </li>
    //             </ul>
    //         );
    //     } else {
    //         return (
    //             <ul className="flex-row">
    //                 <li className="mx-1">
    //                     <Button color="inherit" component={Link} to="/signup">
    //                         Signup
    //                     </Button>
    //                 </li>
    //                 <li className="mx-1">
    //                     <Button color="inherit" component={Link} to="/login">
    //                         Login
    //                     </Button>
    //                 </li>
    //             </ul>
    //         );
    //     }
    // }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Astro Baby
                </Typography>
                <ul className="flex-row">
                    <li className="mx-1">
                        <Button color="inherit">
                            {/* <Button color="inherit" component={Link} to="/signup"></Button> */}
                            Signup
                        </Button>
                    </li>
                    <li className="mx-1">
                        {/* <Button color="inherit">
                            Login
                        </Button> */}
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
}

export default Nav;
