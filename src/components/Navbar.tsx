import { Link } from "react-router-dom";
import routes from "../routes";

function Navbar() {
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

    return (
        <nav>
            <ul className="nav nav-pills">{listItems}</ul>
        </nav>
    );
}

export default Navbar;
