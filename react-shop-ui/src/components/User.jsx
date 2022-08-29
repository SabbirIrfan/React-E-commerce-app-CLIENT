import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
import Navbar_user from "../components/Navbar_user";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

import Login from "../pages/Login.jsx";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

// const Info = styled.div`
//   flex: 3;
// `;

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

// const ProductDetail = styled.div`
//   flex: 2;
//   display: flex;
// `;

// const Image = styled.img`
//   width: 200px;
// `;

// const Details = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const ProductName = styled.span``;

// const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

// const ProductSize = styled.span``;

// const PriceDetail = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const ProductAmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   ${mobile({ marginBottom: "20px" })}
// `;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const User = () => {

  let navigate = useNavigate();

  return (
    <Container>
      <Navbar_user />
      <Wrapper>
        <Title>Your Account Detail</Title>
        <Top>
          <TopButton
           onClick={()=>{
            navigate("/ProductList")
          }}
          >
            ProductList
          </TopButton>
          
          <TopTexts>
            {/* <TopText>Shopping Bag(2)</TopText> */}
            {/* <TopText>Your Wishlist (0)</TopText> */}
          </TopTexts>
          {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
        </Top>
        <Bottom>
          <Summary>
            <SummaryTitle></SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Name</SummaryItemText>
              <SummaryItemPrice>Sabbir Irfan</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Email</SummaryItemText>
              <SummaryItemPrice>Sabbirirfan29@gmail.com</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Supplier Id</SummaryItemText>
              <SummaryItemPrice>{props}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>NID</SummaryItemText>
              <SummaryItemPrice>xxxxxxxxxx</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Balance</SummaryItemText>
              <SummaryItemPrice>99999999999999999</SummaryItemPrice>
            </SummaryItem>
            <Button>Make a Transection</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default User;