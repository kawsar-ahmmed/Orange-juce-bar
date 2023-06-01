import React from 'react';
import { Col } from 'react-bootstrap';
import './table.css'

const BreakFast = ({ item }) => {
    // console.log(item)
    const { title, price, imgUrl,shortDescription } = item;
    return (
        <Col lg={4}>
            <div>
                <div className="items-main">
                    <img src={imgUrl} alt="" className='img-fluid'  />
                    <h3>{title}</h3>
                    <p>{shortDescription}</p>
                    <span>${price}</span>
                </div>
            </div>
        </Col>
    );
};

export default BreakFast;