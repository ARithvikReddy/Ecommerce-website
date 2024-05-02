import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../Stateprovider';
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password,setpassword]=useState('')
  const [{}, dispatch] = useStateValue();
  
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/login',{
      email,
      password
    }).then((response) => {
      // If login successful, dispatch action and navigate
      alert(response.data); 
      if(response.status===200){
        dispatch({
            type: 'SET_USER',
            item: { email }
        });
        navigate('/');
    }
  }).catch((err)=>alert(err))
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Logo>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZwo917qgFSlCzlw1vNLEskbnc-OUHI9ytwE4IYFmxi6JcaiJPGehK8qICibnDKtItME&usqp=CAU" alt="" />
      </Logo>
      <FormContainer>
        <h3>Sign in</h3>
        <InputContainer>
          <p>Email</p>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p>password</p>
          <input type="password" placeholder="***" value={password} onChange={(e) => setpassword(e.target.value)} />
        </InputContainer>
        <LoginButton type="submit">Login</LoginButton>
        <InfoText>By continuing, you agree to our terms</InfoText>
      </FormContainer>
      <SignupButton to="/signup">
        <button>Create Account</button>
      </SignupButton>
    </Container>
  );
};

const Container = styled.form`
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

const FormContainer = styled.div`
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
    margin-bottom:20px;
    border: 1px solid lightgray;
    margin-top: 3px;
    &:hover {
      border: 1px solid blue;
      box-shadow: 0px 0px 5px 0px lightblue;
    }
  }
`;

const LoginButton = styled.button`
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

const SignupButton = styled(Link)`
  width: 25%;
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
  button {
    background-color: black;
    color: white;
    border: none;
  }
`;

export default Login;
