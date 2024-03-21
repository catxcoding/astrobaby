import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
      }]}])

    
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);