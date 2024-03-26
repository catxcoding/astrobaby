// import ReactDOM from "react-dom/client";
// import App from "./App";
// import Home from "./pages/home";
// import Login from "./pages/login";
// import Signup from "./pages/Signup";
// import Shop from "./pages/shop";
// import Detail from "./pages/Detail";
// import OrderHistory from "./pages/orderHistory";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//             },
//             {
//                 path: "/login",
//                 element: <Login />,
//             },
//             {
//                 path: "/signup",
//                 element: <Signup />,
//             },
//             {
//                 path: "/shop",
//                 element: <Shop />,
//             },
//             {
//                 path: "/orderHistory",
//                 element: <OrderHistory />,
//             },
//             {
//                 path: "/products/:id",
//                 element: <Detail />,
//             },
//         ],
//     },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
// );
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Shop from "./pages/shop";
import Detail from "./pages/Detail";
import OrderHistory from "./pages/orderHistory";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// MUI imports
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// Create a custom theme that uses Quicksand font
const theme = createTheme({
    typography: {
        fontFamily: 'Quicksand, sans-serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
                body {
                    font-family: 'Quicksand', sans-serif;
                }
            `,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/orderHistory",
                element: <OrderHistory />,
            },
            {
                path: "/products/:id",
                element: <Detail />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Helps to normalize the styling */}
        <RouterProvider router={router} />
    </ThemeProvider>
);
