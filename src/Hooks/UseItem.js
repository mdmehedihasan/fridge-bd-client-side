import { useEffect, useState } from "react";

const UseItem = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://protected-beach-17122.herokuapp.com/fridgeItem')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return [inventories, setInventories];
}

export default UseItem;