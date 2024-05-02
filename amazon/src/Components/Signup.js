import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setRepassword('');

    axios.post('http://localhost:3002/Sup', {
      email,
      password,
      repassword
    })
    .then((response) => alert(response.data))
    .catch((err) => alert(err));
  };

  return (
    <Container>
      <Logo>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZwo917qgFSlCzlw1vNLEskbnc-OUHI9ytwE4IYFmxi6JcaiJPGehK8qICibnDKtItME&usqp=CAU" alt="" />
      </Logo>
      <FormContainer onSubmit={submitHandler}>
        <h3>Sign up</h3>
        <InputContainer>
          <p>Email</p>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type="password" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <p>Re-type Password</p>
          <input type="password" placeholder="*****" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
        </InputContainer>
        <SignupButton type="submit">Sign up</SignupButton>
        <InfoText>
          By continuing, you agree to our terms 
        </InfoText>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 450px;
  align-items: center;
  display: flex;
  height: fit-content;
  margin: auto;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 120px;
  padding-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid black;
  width: 35%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  input:focus,
  input:hover,
  input:focus,
  input:hover {
    box-shadow: 0px 0px 5px 0px lightblue;
    border-color: blue;
  }
  input:focus {
    outline: none; 
    background-color: lightgray;
  }
  h3 {
    font-size: 28px;
    font-weight: 400;
    align-self: flex-start;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    &:hover {
      border: 1px solid blue;
      box-shadow: 0px 0px 5px 0px lightblue;
    }
  }
`;

const SignupButton = styled.button`
  width: 55%;
  height: 40px;
  margin-top: 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`;

const InfoText = styled.p`
  margin-top: 20px;
`;

export default Signup;
