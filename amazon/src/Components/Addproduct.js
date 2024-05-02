import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
const Addproduct = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('')
        setImage('')
        setPrice('')
        setRating('')
        axios.post('http://localhost:3002/Addproduct', {
                title,
                image,
                price,
                rating
            }).then((response)=>alert(response.data)).catch((err)=>alert(err))
    }

    return (
        <Container onSubmit={handleSubmit}>
            <FormContainer>
                <FormField>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormField>
                <FormField>
                    <label>Image URL</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </FormField>
                <FormField>
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </FormField>
                <FormField>
                    <label>Rating</label>
                    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
                </FormField>
                <Button type="submit">Add Product</Button>
            </FormContainer>
        </Container>
    );
};

const Container = styled.form`
    width: 100%;
    max-width: 1000px;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: linear-gradient(135deg, #6E9BFF, #FF6EC4);
`;

const FormContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid black;
`;

const FormField = styled.div`
    margin-bottom: 20px;

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`;

export default Addproduct;
