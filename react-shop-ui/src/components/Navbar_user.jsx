import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import pic from "./recourse/Capture.png"
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 58px;
  background:
  rgba(255, 215, 215, 10.5);


  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 1000;
  font-size:400%;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar_user = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          {/* E-CASH */}
          {/* <img src={pic} style={{borderRadius :25,width: 220, height: 80}} /> */}

            

          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          {/* <Logo>Bank Api.</Logo> */}
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem> */}
          <MenuItem 
          onClick={()=>{
            navigate("/home");
            
          }}
          >
            SIGN Out</MenuItem>
          {/* <MenuItem>
            <Badge badgeContent={9} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar_user;
