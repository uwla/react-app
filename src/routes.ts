import About from "./pages/About";
import Cities from "./pages/Cities";
import Index from "./pages/Index";

const routes = [
    ["/", "Home", Index()],
    ["/cities", "Cities", Cities()],
    ["/about", "About", About()],
];

export default routes;
