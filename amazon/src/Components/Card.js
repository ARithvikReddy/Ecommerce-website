import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import { useStateValue } from '../Stateprovider'; // Importing useStateValue from Stateprovider

const Card = ({ image, title, rating, price }) => {
  const [{}, dispatch] = useStateValue(); // Destructuring basket and dispatch from useStateValue

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TO_BASKET', // Dispatching action type 'ADD_TO_BASKET'
      item: { image, title, rating, price } // Item to add to the basket
    });
  };

  return (
    <div>
      <Container>
        <Image>
          <img src={image} alt="" />
        </Image>
        <Description>
          <h3>{title}</h3>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          <p>{price}</p>
          <button onClick={addToBasket}>Add to Cart</button> {/* Using addToBasket function on button click */}
        </Description>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid red;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    padding: 10px;
    height: 25vh;
  }
`;

const Description = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 20px;
  }
  button {
    background-color: darkorange;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Card;
