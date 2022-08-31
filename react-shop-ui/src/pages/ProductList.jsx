import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useNavigate,useLocation } from "react-router-dom";
import React, {useEffect, userState, useState} from "react"
import axios from "axios";
import { mobile } from "../responsive";
import Navbar_user from "../components/Navbar_user";


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




const ProductList =  ({accountNumber}) => {
  let navigate = useNavigate();
  let location = useLocation();
  // const [product_id,setproductid] = useState("");
  // const [supplier_id,setsupplierid] = useState("");
  // const [price,setprice] = useState("");
  // const [amount,setamount] = useState("");

  
  const [products, setProducts] = useState([]);
 

  const supplier_id = location.state.accountNumber;
  console.log("this is the product page", supplier_id);
  function sup_id(sup){
    if(sup.supplier_id == supplier_id){
      return sup;
    
    }
  }
  const handle_product = async (e)=>{

    try {

      
      let data1;
      await axios({
        method : 'get',
        url :  "http://localhost:8000/products",
        // params:supplier_id

      }).then(res=>{
        data1 = res;
        console.log("this is the data from get mathod",data1.data);
      }).catch(err => console.log(err));
      console.log(" all the products = " ,data1.data);
      const products = data1.data.result.filter(sup_id);

      setProducts(products);
    } catch (error) {
      console.log(error,"its in the product fetch");
    }
    
  

  };
  
  useEffect((e) => {
    handle_product(e);
  }, []);

  return (
  <div>
    <Navbar_user/>
    <Container felx =".3">
    <table border = "3px">
      <thead>
        <tr>
          <th>Product_id</th>
          <th>Supplier_id</th>
          <th>Price/Unit</th>
          <th>Amount</th>
        </tr>
      </thead>
      {products.map((product) => (
      <tbody>
        <tr>
          <td>{product.product_id}</td>
          <td>{product.supplier_id}</td>
          <td>{product.price}</td>
          <td>{product.amount}</td>
        </tr>
      </tbody>
        
      ))}
      
    </table>

      
    </Container>
    <Footer/>
  </div>
    
  );



  
};

export default ProductList;
