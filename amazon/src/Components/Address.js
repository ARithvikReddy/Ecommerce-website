import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useStateValue } from "../Stateprovider";

const Address = () => {
  const [{},dispatch]=useStateValue();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    setFullName("");
    setPhone("");
    setAddress("");
    setCity("");
    setState("");
    dispatch({
        type:'Add_To_Address',
        item:{fullName,phone,address,city,state}
    })

  };
  

  return (
    <div>
      <Navbar />
      <Container onSubmit={SubmitHandler}>
        <Main>
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Rolex Reddy"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <p>Phone Number</p>
          <input
            type="text"
            placeholder="9391474147"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p>Address</p>
          <input
            type="text"
            placeholder="Vnr Hostel"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p>City</p>
          <input
            type="text"
            placeholder="Hyderabad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <p>State</p>
          <input
            type="text"
            placeholder="Telangana"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <button>Deliver</button>
        </Main>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: auto;
  background-color: rgb(234, 237, 237);
  position: relative;
`;

const Main = styled.form`
  margin-top: 50px;
  p {
    margin-bottom: 5px;
  }
  padding: 20px;
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 55%;
    height: 40px;
    margin-top: 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default Address;
