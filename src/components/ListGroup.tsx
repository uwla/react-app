import { useState } from "react";

interface Props {
    items: string[];
    title: string;
}

function ListGroup(props: Props) {
    let { items, title } = props;

    let [selected, setIndex] = useState(-1);

    let msg = <p>You selected {items[selected]}</p>;

    return (
        <>
            <h1>{title}</h1>
            <br />

            {selected != -1 && msg}

            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={
                            index != selected
                                ? "list-group-item"
                                : "list-group-item active"
                        }
                        onClick={() => setIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
