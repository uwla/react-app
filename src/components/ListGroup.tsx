import { useState } from "react";

interface Props {
    items: string[];
    title: string;
    onSelectedItem: (item: string) => void;
}

function ListGroup(props: Props) {
    let { items, title, onSelectedItem } = props;

    let [selected, setIndex] = useState(-1);

    const handleClick = (index: number) => {
        setIndex(index);
        onSelectedItem(items[index]);
    };

    return (
        <>
            <h1>{title}</h1>
            <br />

            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={
                            index != selected
                                ? "list-group-item"
                                : "list-group-item active"
                        }
                        onClick={() => handleClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
