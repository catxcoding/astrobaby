import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/Signup.jsx";
import Detail from "./pages/Detail.jsx";
import OrderHistory from "./pages/orderHistory.jsx";
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
