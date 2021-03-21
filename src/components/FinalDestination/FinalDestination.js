import React, { useEffect, useState } from 'react';
import map from '../Image/Map.png'
import './FinalDestination.css';


const FinalDestination = () => {
  const [ride, setRide] = useState([]);

  useEffect(() => {
    fetch(`https://api.mocki.io/v1/a58662f8`)
      .then(res => res.json())
      .then(data => setRide(data[0]))
  }, [])
  const { id, name, price, image } = ride;
  return (
    <div className=" container main-content">

      <div className="text" >
        <div className='divStyle'>
          <h4>Dhanmondi</h4>
          <h4>Uttara </h4>
        </div>
        <div className="bike">
          <p><img className="images" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {name}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
        </div>
        <div className="bike">
          <p><img className="images" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {name}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
        </div>
        <div className="bike">
          <p><img className="images" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {name}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
        </div>

      </div>
      <div>
        <img className="image" src={map} alt="" />
      </div>
    </div>
  );
};

export default FinalDestination;