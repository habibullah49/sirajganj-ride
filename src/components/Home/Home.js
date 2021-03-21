import React from 'react';
import { useEffect, useState } from 'react';
import Ride from '../Ride/Ride';

import './Home.css'


const Home = () => {
    const [ride, setRide] = useState([]);

    useEffect(() => {
        fetch(`https://api.mocki.io/v1/a58662f8`)
            .then(res => res.json())
            .then(data => setRide(data))
    }, [])
    return (
        <div className="container background" >
            {
                ride.map(ride => <Ride key={ride.id} ride={ride}> </Ride>)
            }
        </div>
    );
};

export default Home;