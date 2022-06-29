import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import React, {useEffect, userState, useState} from "react"
import axios from "axios";
const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(
    rgba(255, 205, 205, 10.5),
    rgba(205, 205, 205, 10.5)
  ),
    url("https://i.ibb.co/qJbWXQy/Simple-White-Pattern-Background-Image.jpg")
      center;
  // background-size: cover;
  display: flex;
  align-items: top;
  justify-content: center;
`;
const Container_nav = styled.div`
  height: 90px;
 
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  width: 25%;
  height: 80%;
  padding: 20px;
  padding-top: 100px;
  align-items: top;
  border-radius: 25px;
  justify-content: center;
  // background-color: white;
  ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 35vh;
  border-radius: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 100%;
  border-radius:10px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;  
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [accountNumber, setaccountNumber] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();


  useEffect(()=>{

  },[accountNumber,password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      const response =  await axios.post("http://localhost:8000/auth/login",
        JSON.stringify({accountNumber,password}),
        {
          headers :{ 'Content-Type' : 'application/json'},
          // withCredentials : true 

        }
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.token;
      console.log(accessToken);
      
      setaccountNumber("");
      setpassword("");
      
      navigate("/user");

      
    } catch (err) {

      console.log(err);
    }

    console.log("success submission");
  }

  return (
    <div>
    <Container_nav>
    <Navbar/>

    </Container_nav>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
            placeholder="accountNumber"
            autoComplete="off"
            onChange={(e)=> setaccountNumber(e.target.value)}
            required
           />
          <Input 
            placeholder="password"
            type={password}
            autoComplete="off"
            onChange={(e)=> setpassword(e.target.value)}
            required
           />
          <Button 
              onClick={(e)=>{
                handleSubmit(e);
                
              }}
              >
                Login
              </Button>           
              <Link>Forgot The PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
    </div>
  );
};

export default Login;
