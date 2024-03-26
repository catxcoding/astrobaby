import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Shop from "./pages/shop";
import Detail from "./pages/Detail";
import Success from './pages/Sucess';
import OrderHistory from "./pages/orderHistory";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
                path: '/success',
                element: <Success />
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
    <RouterProvider router={router} />
);
