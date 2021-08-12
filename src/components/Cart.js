import { useState } from "react";
import styled from "styled-components";
import Product from "./Product";

function Cart() {
  const CartComponent = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
  `;

  const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <CartComponent>
      <ProductWrapper>
        <Product name="책상" unitPrice={30000} />
        <Product name="노트북" unitPrice={1000000} />
        <Product name="마우스" unitPrice={50000} />
      </ProductWrapper>
    </CartComponent>
  );
}

export default Cart;
