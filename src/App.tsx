import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
    const items = ["New York", "San Diego", "Chicago", "Boston", "Miami"];

    let [selected, setSelected] = useState("");

    const handleSelected = (item: string) => {
        setSelected(item);
    };

    return (
        <div>
            {selected != "" && <p>You selected {selected}</p>}

            <ListGroup
                title="Cities"
                items={items}
                onSelectedItem={handleSelected}
            />
        </div>
    );
}

export default App;
