import React from 'react';
import UseItem from '../../Hooks/UseItem';

const ManageItems = () => {
    const [inventories, setInventories] = UseItem();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://protected-beach-17122.herokuapp.com/fridgeItem/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining)
                })
        }
    }

    return (
        <div>
            <h2>Manage Your Inventory</h2>
            {
                inventories.map(inventory => <div
                    key={inventory._id}>
                    <h4>{inventory.name} <button onClick={() => handleDelete(inventory._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageItems;