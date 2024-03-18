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
