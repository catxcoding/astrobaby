import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Detail from './pages/Detail';
import OrderHistory from './pages/OrderHistory';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },{
        path: '/signup',
        element: <Signup />
      },{
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      }]}])

    
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);