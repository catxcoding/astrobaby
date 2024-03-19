import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Home from './pages/home';
import Login from './pages/login';
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
      },]}])

      ReactDOM.render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
        document.getElementById("root")
      );