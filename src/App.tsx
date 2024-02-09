import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
    const items = ["New York", "San Diego", "Chicago", "Boston", "Miami"];

    return (
        <div>
            <ListGroup items={items} title="Cities" />
        </div>
    );
}

export default App;
