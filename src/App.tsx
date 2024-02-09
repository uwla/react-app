import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import "./App.css";

function App() {
    const items = ["New York", "San Diego", "Chicago", "Boston", "Miami"];

    let [selected, setSelected] = useState("");

    const handleSelected = (item: string) => {
        setSelected(item);
    };

    return (
        <div>
            {selected != "" && (
                <Alert variant="info">
                    You selected <b>{selected}</b>
                </Alert>
            )}

            <ListGroup
                title="Cities"
                items={items}
                onSelectedItem={handleSelected}
            />
        </div>
    );
}

export default App;
