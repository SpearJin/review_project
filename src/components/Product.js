import { useState } from "react";
import styled from "styled-components";

function Product({ name, unitPrice }) {
  const [quentity, setQuentity] = useState(5);
  const price = quentity * unitPrice;

  const ProductComponent = styled.div`
    padding: 10px;
    font-size: 25px;
    & > .product__count {
      display: inline-block;
      width: 25px;
      height: 25px;
      line-height: 25px;
      border-radius: 50%;
      background-color: seagreen;
      color: white;
      text-align: center;
    }
    & > button {
      color: goldenrod;
      font-size: 25px;
    }
    & > button:hover {
      opacity: 0.8;
    }
  `;

  const onIncrease = () => {
    if (quentity < 9) {
      setQuentity(quentity + 1);
    }
  };

  const onDecrease = () => {
    if (quentity > 0) {
      setQuentity(quentity - 1);
    }
  };

  return (
    <ProductComponent>
      <span>{name}</span>
      <button onClick={onDecrease}>
        <i className="fas fa-minus-square"></i>
      </button>
      <span className="product__count">{quentity}</span>
      <button onClick={onIncrease}>
        <i className="fas fa-plus-square"></i>
      </button>
      <span>{price}원</span>
    </ProductComponent>
  );
}

export default Product;
