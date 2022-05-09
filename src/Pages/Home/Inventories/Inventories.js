import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import "../Inventories/Inventories.css"

const Inventories = () => {

    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://protected-beach-17122.herokuapp.com/fridgeItem')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div className='container'>
            <h2 className="heading-title my-5 text-success" id='services'>Our Item</h2>
            <div className='bg-success w-100' style={{ height: '1px' }}></div>
            <div className="inventories-container">
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}

                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;