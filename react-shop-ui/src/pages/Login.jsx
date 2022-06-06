import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();
  return (
    <div>
    <Container_nav>
    <Navbar/>

    </Container_nav>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button 
              onClick={()=>{
                navigate("/user");
              }}
              >
                Login
              </Button>           <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
    </div>
  );
};

export default Login;
