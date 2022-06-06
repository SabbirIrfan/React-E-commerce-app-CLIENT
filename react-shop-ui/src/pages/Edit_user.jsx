import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Navbar_user from "../components/Navbar_user";
import { useNavigate } from "react-router-dom";
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
  padding-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 15px;
  min-width: 50%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 98%;
  border-radius: 10px;
  padding-top:20px;
  padding-left: 20px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar_user />
      <Container >
        <Wrapper>

          <Title>Update Profile</Title>
          <Form>
            <Input placeholder="full name" />
            <Input placeholder="mobile no" />
            <Input placeholder="email" />
            <Input placeholder="NID" />


            <Button
              onClick={()=>{
                navigate("/user");
              }}
            >UPDATE</Button>

          </Form>

        </Wrapper>
        
      </Container>
    </div>
  );
};

export default Register;
