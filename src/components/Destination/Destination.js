import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import map from '../Image/Map.png'
import './Destination.css'

const Destination = () => {
    return (
        <div className="container">
            <div className="main-content">
                <div className="text">
                    <Form>
                        <Form.Group controlId="formBasicStart">
                            <Form.Label>Pick Form</Form.Label>
                            <Form.Control type="text" name="startForm" placeholder="Dhanmondi" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEnd">
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control type="text" name="journyEnd" placeholder="Uttara" />
                        </Form.Group>
                    </Form>
                    <Button className="mb-3" as={Link} to="/finalDestination" variant="primary"> Search</Button>
                </div>
                <div>
                    <img className="image" src={map} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Destination;