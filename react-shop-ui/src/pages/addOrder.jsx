import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import React, {useEffect, userState, useState} from "react"
import axios from "axios";
import User from "./User";
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

const AddOrder = () => {
  const [product_id, setProductId] = useState("");
  const [supplier_id, setSupplierId] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [user,setUser] = useState();
  let navigate = useNavigate();
  let username, email,balance,address;
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);
      const foundUser = loggedInUser;
      
      setUser(foundUser);
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response =  await axios.post("http://localhost:8000/addProducts",
        JSON.stringify({product_id,supplier_id,price,amount}),
        {
          headers :{ 'Content-Type' : 'application/json'},
          // withCredentials : true 

        }
      );
    
      // console.log("User information is at login page", JSON.parse(localStorage.getItem('user')));


      // const accessToken = response?.data?.token;
      // console.log(accessToken);
      
      setProductId("");
      setSupplierId("");
      setPrice("");
      setAmount("");
      
      // <User accountNumber= {accountNumber}/>
      

      // navigate("/user",{state: {accountNumber:accountNumber, username: username, address: address, email: email}});
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
        <Title>Create Product</Title>
        <Form>
          <Input 
            placeholder="Product_id"
            autoComplete="off"
            onChange={(e)=> setProductId(e.target.value)}
            required
           />
          <Input 
            placeholder="Supplier_id"
            autoComplete="off"
            onChange={(e)=> setSupplierId(e.target.value)}
            required
           />
           <Input 
            placeholder="Price/Unit"
            autoComplete="off"
            onChange={(e)=> setPrice(e.target.value)}
            required
           />
           <Input 
            placeholder="Amount"
            autoComplete="off"
            onChange={(e)=> setAmount(e.target.value)}
            required
           />
          <Button 
              onClick={(e)=>{
                handleSubmit(e);
                
              }}
              >
                Submit Product
              </Button>           
              
        </Form>
      </Wrapper>
    </Container>
    </div>
  );
};

export default AddOrder;
