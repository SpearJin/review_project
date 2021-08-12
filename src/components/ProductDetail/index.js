import { useState } from "react";
import styled from "styled-components";
import addComma from "../../util/addComma";

const DetailComponent = styled.div`
  display: ${({ isDisplsyNone }) => (isDisplsyNone ? "none" : "block")};
  position: fixed;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-radius: 10px;
  background-color: white;
  z-index: 1;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 18px;
`;

const DetailWrapper = styled.div`
  display: ${({ isDisplsyNone }) => (isDisplsyNone ? "none" : "block")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
`;

const CancleBtn = styled.button`
  position: fixed;
  top: 10%;
  right: 10%;
  background-color: rgba(0, 0, 0, 0.3);
`;

function ProductDetail({ detailProduct, setDetailProduct, setProductList }) {
  const isDisplayNone = detailProduct === null;

  const onDeleteHandle = () => {
    setProductList((state) =>
      state.filter((item) => item._id !== detailProduct._id)
    );
    setDetailProduct(null);
  };

  return (
    <>
      <DetailComponent isDisplsyNone={isDisplayNone}>
        <ProductInfo>
          <Image src={detailProduct.img} />
          <div>{detailProduct.name}</div>
          <div>{detailProduct.detail}</div>
          <div>{addComma(detailProduct.price)}원</div>
          <div>
            <button>수정</button>
            <button onClick={onDeleteHandle}>삭제</button>
          </div>
        </ProductInfo>
        <CancleBtn onClick={() => setDetailProduct(null)}>X</CancleBtn>
      </DetailComponent>
      <DetailWrapper />
    </>
  );
}

export default ProductDetail;
