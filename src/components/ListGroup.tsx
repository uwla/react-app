function ListGroup() {
    const items = ["Mary", "John", "Gertrude", "Jeremy", "Grady", "Thomas"];

    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
