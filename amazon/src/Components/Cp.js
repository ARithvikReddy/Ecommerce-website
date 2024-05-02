import React from 'react';
import { useStateValue } from '../Stateprovider';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const Cp = () => {
    const [{ basket,user }, dispatch] = useStateValue();

    const removeFromBasket = (index) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            index: index
        });
    }
    const navigate=useNavigate();
    const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

    // Function to format currency into rupees
    const formatCurrency = (amount) => {
        // Check if the amount is an integer
        if (amount % 1 === 0) {
            // If integer, format without decimal places
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
        } else {
            // If not an integer, format with decimal places
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
        }
    }
    
    const proceedToCheckout = () => {
        // Check if user is signed in
        if (user) {
            // If user is signed in, navigate to address page
            navigate('/Address');
        } else {
            // If user is not signed in, show alert
            alert('Please sign in to proceed to checkout.');
        }
    }

    return (
        <Container>
            <Navbar />
            <Main>
                <ShoppingCart>
                    <h2>Shopping Cart</h2>
                    {basket.map((item, index) => (
                        <Product key={index}>
                            <Image>
                                <img src={item.image} alt={item.title} />
                            </Image>
                            <Description>
                                <h4>{item.title}</h4>
                                <p>{formatCurrency(item.price)}</p> {/* Format currency here */}
                                <button onClick={() => removeFromBasket(index)}>Remove</button>
                            </Description>
                        </Product>
                    ))}
                </ShoppingCart>
                <Subtotal>
                    <Description1>
                        <h4>Subtotal({basket.length} items): {formatCurrency(totalPrice)}</h4> {/* Format currency here */}
                        <button onClick={proceedToCheckout}>Proceed to Checkout</button>
                    </Description1>
                </Subtotal>
            </Main>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    margin: auto;
    background-color: #f5f5f5;
`;

const Main = styled.div`
    padding: 20px;
    max-width: 1200px; /* Set max-width to 1200px */
    margin: auto;
`;

const ShoppingCart = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    max-width: 1200px; /* Set max-width to 1200px */
`;

const Product = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
`;

const Image = styled.div`
    flex: 0 0 200px;
    margin-right: 20px;
    width: 100%;
    margin-right: 60px;
    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
`;

const Description = styled.div`
    flex: 1;

    h4 {
        margin-bottom: 5px;
    }

    p {
        margin-bottom: 10px;
        color: #777;
    }

    button {
        padding: 8px 16px;
        background-color: #dc3545;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;

const Subtotal = styled.div`
    padding: 20px;
    max-width: 1200px; /* Set max-width to 1200px */
    margin: auto;
`;

const Description1 = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    padding: 2px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    max-width: 1200px; 
    button {
        width: 40%;
        border-radius: 8px;
        background-color: darkorange;
        border: none;
        padding: 2px;
    }
`;

export default Cp;
