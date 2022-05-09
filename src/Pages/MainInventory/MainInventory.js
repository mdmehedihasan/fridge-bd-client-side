import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MainInventory = () => {

    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://protected-beach-17122.herokuapp.com/fridgeItem/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])

    return (
        <div>
            <img src={inventory.img} alt="" />
            <h3>Product Name:{inventory.name}</h3>
            <p>Supplier Name:{inventory.Supplier_name}</p>
            <p>Price: {inventory.price}</p>
            <p>Quantity:{inventory.quantity}</p>
            <p>{inventory.description}</p>


            <div>
                <Link to="/manageitems">
                    <button className='btn btn-success'>DELIVERED</button>
                </Link>
            </div>

        </div>
    );
};

export default MainInventory;