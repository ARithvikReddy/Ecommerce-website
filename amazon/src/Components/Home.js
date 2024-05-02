import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/get');
        console.log('products >>>', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Navbar />
        <Banner>
          <img
            src="https://i.gadgets360cdn.com/large/amazon_great_indian_festival_sale_2021_image_1_1633097531416.jpg"
          />
        </Banner>
        <Main>
          {products.map((product) => (
            <Card
              image={product.image} // Assuming the product object has an 'image' property
              title={product.title} // Assuming the product object has a 'title' property
              rating={product.rating} // Assuming the product object has a 'rating' property
              price={product.price} // Assuming the product object has a 'price' property
            />
          ))}
        </Main>
        <Addproducts>
        <button onClick={()=>navigate('/Addproduct')}>Add product </button>
        </Addproducts>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200vh;
  background-color: rgb(234, 237, 237);
`;
const Addproducts=styled.div`
display:flex;
margin:auto;
padding-top:3rem;
button{
  width:30%;
  background-color:lightgray;
  margin:auto;
}
`

const Banner = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 80%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-template-rows: 420px;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 20px;
`;

export default Home;
