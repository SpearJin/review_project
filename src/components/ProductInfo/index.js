import styled from "styled-components";
import addComma from "../../util/addComma";

const InfoComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  & > .info__description {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

function ProductInfo({ data, onClick }) {
  const { img, name, price } = data;
  return (
    <InfoComponent onClick={onClick}>
      <Image src={img} />
      <div className="info__description">
        <span>{name}</span>
        <span>{addComma(price)}원</span>
      </div>
    </InfoComponent>
  );
}

export default ProductInfo;
