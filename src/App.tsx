import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Main />
                <Footer />
            </Router>
        </>
    );
}

export default App;
