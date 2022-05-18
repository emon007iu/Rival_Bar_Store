import React from 'react';
import { BsCartCheckFill } from 'react-icons/bs';
import './Card.css';

const Card = ({gun, handleAddToCart}) => {
    const {img, name, bullet, capacity, action, price  } = gun;


    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <p>Bullet Type: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>
            <div>
                <button onClick={() => handleAddToCart(gun)}>Add to Cart <BsCartCheckFill/> </button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default Card;