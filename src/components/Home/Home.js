import React, { useContext, useEffect } from 'react';
import './Home.css'
import { OnionContext } from '../../App';

const Home = () => {
    const [onion, setOnion] = useContext(OnionContext)
    useEffect(()=> {
        fetch('onionData.json')
        .then(res=> res.json())
        .then(data=> setOnion(data))
    },[setOnion])
    console.log(onion)
    return (
        <div>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;