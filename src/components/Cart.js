import { useState } from "react";
import styled from "styled-components";
import addComma from "../util/addComma";
import Product from "./Product";

const CartComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProductWrapper = styled.div`
  & > .total__price {
    font-size: 17px;
    text-align: right;
  }
`;

function Cart() {
  const [deskTotalPrice, setDeskTotalPrice] = useState(0);
  const [notebookTotalPrice, setNotebookTotalPrice] = useState(0);
  const [mouseTotalPrice, setMouseTotalPrice] = useState(0);
  const totalPrice = deskTotalPrice + notebookTotalPrice + mouseTotalPrice;

  return (
    <CartComponent>
      <ProductWrapper>
        <Product
          name="책상"
          unitPrice={30000}
          setTotalPrice={setDeskTotalPrice}
        />
        <Product
          name="노트북"
          unitPrice={1000000}
          setTotalPrice={setNotebookTotalPrice}
        />
        <Product
          name="마우스"
          unitPrice={50000}
          setTotalPrice={setMouseTotalPrice}
        />
        <div className="total__price">총 가격: {addComma(totalPrice)}원</div>
      </ProductWrapper>
    </CartComponent>
  );
}

export default Cart;
