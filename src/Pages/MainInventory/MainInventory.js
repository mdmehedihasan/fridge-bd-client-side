import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MainInventory = () => {

    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/fridgeItem/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])

    return (
        <div>
            <h3>This is Your Product:{inventory.name}</h3>
            <div>
                <Link to="/manageitems">
                    <button className='btn btn-primary'>Manage Item</button>
                </Link>
            </div>

        </div>
    );
};

export default MainInventory;