// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// function Nav() {

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/orderHistory">
//               Order History
//             </Link>
//           </li>
//           <li className="mx-1">
//             {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//             <a href="/" onClick={() => Auth.logout()}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/signup">
//               Signup
//             </Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/login">
//               Login
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="flex-row px-1">
//       <h1>
//         <Link to="/">
//           <span role="img" aria-label="AstroBaby"></span>
//           AstroBaby
//         </Link>
//       </h1>

//       <nav>
//         {showNavigation()}
//       </nav>
//     </header>
//   );
// }

// export default Nav;

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Nav() {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Toolbar>
                    <Button component={Link} to="/shop" color="inherit">
                        Products
                    </Button>
                    <Button component={Link} to="/orderHistory" color="inherit">
                        Order History
                    </Button>
                    <Button color="inherit" onClick={() => Auth.logout()}>
                        Logout
                    </Button>
                </Toolbar>
            );
        } else {
            return (
                <Toolbar>
                    <Button component={Link} to="/signup" color="inherit">
                        Signup
                    </Button>
                    <Button component={Link} to="/login" color="inherit">
                        Login
                    </Button>
                </Toolbar>
            );
        }
    }

    return (
        <AppBar
            position="static"
            style={{ backgroundColor: "#add8e6", width: "100%" }}
        >
            <Toolbar
                style={{
                    fontFamily:
                        "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                    color: "white",
                }}
            >
                <Typography
                    variant="h2"
                    component={Link}
                    to="/"
                    style={{ flexGrow: 1, fontWeight: "bold" }}
                >
                    <span role="img" aria-label="AstroBaby"></span>
                    AstroBaby
                </Typography>
                {showNavigation()}
            </Toolbar>
        </AppBar>
    );
}

export default Nav;
