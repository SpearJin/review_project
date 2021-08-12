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

const DetailBtn = styled.button`
  width: 35px;
  height: 25px;
  line-height: 25px;
  margin: 5px 4px;
  border-radius: 10px;
  background-color: goldenrod;
  color: white;
  font-size: 8px;
  :hover {
    opacity: 0.8;
  }
`;

const InputDetail = styled.div`
  display: flex;
  flex-direction: column;
  & > input {
    margin: 3px 0;
    border: 1px solid black;
    border-radius: 4px;
    text-align: center;
  }
  & > input:focus {
    background-color: wheat;
  }
`;

function ProductDetail({ detailProduct, setDetailProduct, setProductList }) {
  const [img, setImg] = useState(detailProduct.img);
  const [name, setName] = useState(detailProduct.name);
  const [detail, setDetail] = useState(detailProduct.detail);
  const [price, setPrice] = useState(detailProduct.price);
  const [currentSate, setCurrentSate] = useState("none");

  const isDisplayNone = detailProduct === null;

  const onUpdateHandler = () => {
    setProductList((state) =>
      state.map((item) => {
        if (item._id === detailProduct._id) {
          return {
            ...item,
            name,
            detail,
            price,
          };
        }
        return item;
      })
    );
    setDetailProduct(null);
  };

  const onDeleteHandle = () => {
    setProductList((state) =>
      state.filter((item) => item._id !== detailProduct._id)
    );
    setDetailProduct(null);
  };

  const divDetail = (
    <>
      <Image src={detailProduct.img} />
      <div>{detailProduct.name}</div>
      <div>{detailProduct.detail}</div>
      <div>{addComma(detailProduct.price)}원</div>
      <div>
        <DetailBtn onClick={() => setCurrentSate("update")}>수정</DetailBtn>
        <DetailBtn onClick={onDeleteHandle}>삭제</DetailBtn>
      </div>
    </>
  );

  const udapteDetail = (
    <>
      <Image src={img} />
      <InputDetail className="detail__input">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </InputDetail>
      <div>
        <DetailBtn onClick={onUpdateHandler}>완료</DetailBtn>
        <DetailBtn onClick={() => setCurrentSate("none")}>취소</DetailBtn>
      </div>
    </>
  );

  return (
    <>
      <DetailComponent isDisplsyNone={isDisplayNone}>
        <ProductInfo>
          {currentSate === "update" ? udapteDetail : divDetail}
        </ProductInfo>
        <CancleBtn onClick={() => setDetailProduct(null)}>X</CancleBtn>
      </DetailComponent>
      <DetailWrapper />
    </>
  );
}

export default ProductDetail;
