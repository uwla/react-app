import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Cities from "./pages/Cities";
import Index from "./pages/Index";

function App() {
    return (
        <>
            <Router>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cities">Cities </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About </Link>
                    </li>
                </ul>
                <br />
                <br />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cities" element={<Cities />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
