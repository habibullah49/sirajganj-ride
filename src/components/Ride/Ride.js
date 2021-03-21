import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './Ride.css'
import { Link } from 'react-router-dom';


const Ride = (props) => {
    const { name, image } = props.ride;
    return (

        <Card as={Link} to="/destination" className="cardStyle shadow-sm p-2 bg-body rounded container " style={{ width: '14rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="text-danger">{name}</Card.Title>
                <Button as={Link} to="/destination" variant="danger">Select Ride</Button>
            </Card.Body>
        </Card>

    );
};

export default Ride
    ;