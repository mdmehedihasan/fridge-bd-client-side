import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { name, img, description, QTY, id } = inventory;
    return (
        <div className='service py-5'>
            <img className='my-3 border border rounded' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Quantity: {QTY} Pcs</p>

            <Link to="/checkout">
                <button className='btn btn-success'>Update Stock</button>
            </Link>
        </div>
    );
};

export default Inventory;