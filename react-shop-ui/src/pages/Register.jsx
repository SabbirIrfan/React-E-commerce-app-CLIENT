import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import React, {useEffect, userState, useState} from "react"
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 87vh;
  background: linear-gradient(
    rgba(255, 205, 205, 10.5),
    rgba(205, 205, 205, 10.5)
  );
  //  url("https://i.ibb.co/8KxWHZc/register-page-background.jpg")
    
      background-size: cover;
      // background-repeat: no-repeat;
      // background-length: 150px, 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  let navigate = useNavigate();
  const [username,setusername] = useState("");
  const [address,setaddress] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [accountNumber,setaccountNumber] = useState();
  const [confirmPassword,setconfirmPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      const {response} =  await axios.post("http://localhost:8000/register",
        JSON.stringify({username,address,email,password,accountNumber,confirmPassword}),
        {
          headers :{ 'Content-Type' : 'application/json'},
          // withCredentials : true 

        }
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.token;
      console.log(accessToken);
      
      setaddress("");
      setemail("");
      setusername("");
      setaccountNumber("");
      setpassword("");
      console.log("success submission");

      navigate("/user",{state: {accountNumber:accountNumber, username: username, address: address, email: email}});

      
    } catch (err) {

      console.log("error from frontend register page",err);
    }

  }

  return (
    <div>
      <Navbar />
      <Container >
        <Wrapper>

          <Title>CREATE AN ACCOUNT</Title>
          <Form>
          <Input 
            placeholder="username"
            autoComplete="off"
            onChange={(e)=> setusername(e.target.value)}
            required
           />
          <Input 
            placeholder="address"
            autoComplete="off"
            onChange={(e)=> setaddress(e.target.value)}
            required
           />
          <Input 
            placeholder="email"
            autoComplete="off"
            onChange={(e)=> setemail(e.target.value)}
            required
           />
          <Input 
            placeholder="password"
            type={"password"}
            autoComplete="off"
            onChange={(e)=> setpassword(e.target.value)}
            required
           />
          <Input 
            placeholder="phoneNumber"
           autoComplete="off"
            onChange={(e)=> setaccountNumber(e.target.value)}
            required
           />
            <input
              placeholder = "confirmPassword"
              type= {"password"}
              autoComplete = "off"
              onChange={
                (e)=> {
                  setconfirmPassword(e.target.value)
                }
              }
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button
            onClick={(e)=>{
              handleSubmit(e);
            }}
            >
              CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;
