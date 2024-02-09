import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import If from "./components/If";
import "./App.css";

function App() {
    const items = ["New York", "San Diego", "Chicago", "Boston", "Miami"];

    let [selected, setSelected] = useState("");
    let [showInfo, setInfoVisibility] = useState(false);

    const handleSelected = (item: string) => {
        setSelected(item);
        setInfoVisibility(true);
    };

    return (
        <>
            <If condition={showInfo}>
                <Alert
                    variant="info"
                    dismissible={true}
                    onDismiss={() => setInfoVisibility(false)}
                >
                    You selected <b>{selected}</b>
                </Alert>
            </If>

            <ListGroup
                title="Cities"
                items={items}
                onSelectedItem={handleSelected}
            />
        </>
    );
}

export default App;
