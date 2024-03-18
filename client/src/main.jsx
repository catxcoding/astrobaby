<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/home";
import Nav from "./components/nav";
import Detail from "./pages/Detail";
import Login from "./pages/login";
import OrderHistory from "./pages/OrderHistory";

import "./App.css";

function App() {
    return (
        <>
        
            <Router>
                <div>
                    <Nav /> {/* Render your NavTabs component */}
                    <Routes>
                        <Route exact path="/" element={<App />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Detail" element={<Detail />} />
                        <Route path="/Login" element={<Login />} />
                        <Route
                            path="/OrderHistory"
                            element={<OrderHistory />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> 16d96dd0e2bfc94ed72ff1c95c99cbbbe4d6c35f
