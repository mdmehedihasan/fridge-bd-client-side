import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <h2 className="heading-title my-5 text-success" id='services'>Frequently Asked Question </h2>
            <div className='bg-success w-100 mb-3' style={{ height: '1px' }}></div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='text-start text-success'>Is the fridge good for all weather?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Walton Refrigerator is the Best Refrigerator brand in Bangladesh manufacturing different types of the refrigerator that aids you. Latest Nano technology installed in our refrigerators which enhances the performance, making it the most trusted and long-lasting food preserving solution for the user. The new stylish look elevates the class of your kitchen to a whole new level. Nothing beats the combination of the latest Nano technology with stylish design upgrading your kitchen outlook.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='text-start'>How can I Buy the Fridge?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Walton Refrigerator is the Best Refrigerator brand in Bangladesh manufacturing different types of the refrigerator that aids you. Latest Nano technology installed in our refrigerators which enhances the performance, making it the most trusted and long-lasting food preserving solution for the user. The new stylish look elevates the class of your kitchen to a whole new level. Nothing beats the combination of the latest Nano technology with stylish design upgrading your kitchen outlook.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='text-start'>Tell me the feature of your product.</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Walton Refrigerator is the Best Refrigerator brand in Bangladesh manufacturing different types of the refrigerator that aids you. Latest Nano technology installed in our refrigerators which enhances the performance, making it the most trusted and long-lasting food preserving solution for the user. The new stylish look elevates the class of your kitchen to a whole new level. Nothing beats the combination of the latest Nano technology with stylish design upgrading your kitchen outlook.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;