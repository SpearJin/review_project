import { useState } from "react";
import styled from "styled-components";

function Cart() {
  const [quentity, setQuentity] = useState(5);
  const price = quentity * 30000;

  const CartComponent = styled.div`
    padding: 10px;
    font-size: 25px;
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
    <CartComponent>
      <span>책상</span>
      <button onClick={onDecrease}>
        <i className="fas fa-minus-square"></i>
      </button>
      <span>{quentity}</span>
      <button onClick={onIncrease}>
        <i className="fas fa-plus-square"></i>
      </button>
      <span>{price}</span>
    </CartComponent>
  );
}

export default Cart;
