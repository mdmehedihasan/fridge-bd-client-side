import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { name, img, description, quantity, _id, price, Supplier_name } = inventory;
    const navigate = useNavigate();

    const navigateTomaininventory = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className=' py-5'>
            <img className='my-3 border border rounded' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Supplier Name: {Supplier_name}</p>
            <p>Price:{price} Taka</p>
            <p>Quantity: {quantity} Pcs</p>


            <button onClick={() => navigateTomaininventory(_id)} className='btn btn-success'>Update Stock</button>

        </div>
    );
};

export default Inventory;