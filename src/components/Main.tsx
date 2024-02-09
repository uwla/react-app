import { Route, Routes } from "react-router-dom";
import routes from "../routes";

function Main() {
    const routeItems = routes.map((item: any) => {
        const [path, _, element] = item;
        return <Route path={path} element={element()} />;
    });
    return (
        <main>
            <Routes>{routeItems}</Routes>
        </main>
    );
}

export default Main;
