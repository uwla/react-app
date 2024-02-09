import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import routes from "./routes";

function App() {
    const listItems = routes.map((item: any) => {
        const [path, title, _] = item;
        return (
            <li className="nav-item">
                <Link className="nav-link" to={path}>
                    {title}
                </Link>
            </li>
        );
    });

    const routeItems = routes.map((item: any) => {
        const [path, _, element] = item;
        return (
            <Route path={path} element={element}/>
        );
    })

    return (
        <>
            <Router>
                <ul className="nav nav-pills">
                    {listItems}
                </ul>
                <hr />
                <Routes>
                    {routeItems}
                </Routes>
            </Router>
        </>
    );
}

export default App;
