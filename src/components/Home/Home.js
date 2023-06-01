import React, { useContext, useEffect } from 'react';
import './Home.css'
import { OnionContext } from '../../App';
import { Container, Form } from 'react-bootstrap';
import TableItems from './TableItems/Table';
import Blog from '../Blog/Blog';

const Home = () => {
    const [setOnion] = useContext(OnionContext)
    useEffect(() => {
        fetch('onionData.json')
            .then(res => res.json())
            .then(data => setOnion(data))
    }, [setOnion])

    return (
        <div className='home-main'>
            <Container>
                <div className="search-bar text-center">
                    <Form>
                        <Form.Group className="mb-3 search-control" controlId="formBasicEmail">
                            <h2>Best food waiting for your belly</h2>
                            <div className="search-input-container">
                                <Form.Control type="text" placeholder="Search Food Items Here" />
                                <button className="search-button">Search</button>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
                <TableItems></TableItems>
                <Blog></Blog>
            </Container>
        </div>
    );
};

export default Home;