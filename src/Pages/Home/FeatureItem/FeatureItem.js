import React, { useState } from 'react';
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap';
import feature1 from "../../../images/feature1.jpg"

const FeatureItem = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <h2 className="heading-title my-5 text-success" id='services'>Featured Item </h2>
            <div className='bg-success w-100 mb-3' style={{ height: '1px' }}></div>
            <Container>
                <Row className='mt-5'>
                    <Col xs={12} md={8}>
                        <h2 className='text-success'>Walton Non Frost Super Cool Refrigerator</h2>
                        <h5>WALTON-WFE-2H2-GDEL-XX</h5> <br></br>

                        <h4 className='text-lg-start text-success'>Residential Use:</h4>
                        <p className='text-lg-start'>
                            <li>Replacement Guarantee: 1 Year (Condition Apply)</li>
                            <li>Main Parts (Compressor): 12 Years</li>
                            <li>Spare Parts: 4 Years *</li>
                            <li>After Sales Service:5 Years *</li>

                        </p>
                        <h4 className='text-lg-start text-success'>Commercial Use:</h4>
                        <p className='text-lg-start'>
                            <li>Replacement Guarantee: 1 Year (Condition Apply)</li>
                            <li>Main Parts (Compressor): 12 Years</li>
                            <li>Spare Parts: 4 Years *</li>
                            <li>After Sales Service:5 Years *</li>

                        </p>

                    </Col>

                    <Col className='img-fluid pos' xs={12} md={4}>
                        <img height={350} src={feature1} alt="" />
                        <div>
                            <>
                                <Button className='bg-success'
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                >
                                    Know More This Item
                                </Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        <p className='text-lg-start'>
                                            This warranty does not cover the following cases:<br />
                                            1. Any damage due to accident, electrical fault, natural causes, negligence or improper installation.<br />
                                            2. Any damage or failure caused by unauthorized modification or alteration.<br />
                                            3. Products with original serial numbers that have been removed, distorted or cannot be readily recognized.
                                        </p>
                                    </div>
                                </Collapse>
                            </>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default FeatureItem;