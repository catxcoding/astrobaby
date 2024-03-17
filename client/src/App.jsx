import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";
import Login from "./pages/login";

import "./App.css";

function App() {
    return (
        <>
            <Router>
                <div>
                    <Nav /> {/* Render your NavTabs component */}
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Login" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
