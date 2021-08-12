import styled from "styled-components";
import deskImg from "../../images/desk.jpeg";

const InfoComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > .info__description {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    font-size: 18px;
  }
`;

function ProductInfo() {
  return (
    <InfoComponent>
      <img src={deskImg} />
      <div className="info__description">
        <span>책상</span>
        <span>30000원</span>
      </div>
    </InfoComponent>
  );
}

export default ProductInfo;
