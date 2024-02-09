import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import AlertInfo from "./components/AlertInfo";

function App() {
    const items = ["New York", "San Diego", "Chicago", "Boston", "Miami"];

    let [selected, setSelected] = useState("");

    const handleSelected = (item: string) => {
        setSelected(item);
    };

    return (
        <div>
            {selected != "" && (
                <AlertInfo>
                    You selected <b>{selected}</b>
                </AlertInfo>
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
