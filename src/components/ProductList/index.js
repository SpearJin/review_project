import ProductInfo from "../ProductInfo";
import deskImg from "../../images/desk.jpeg";
import notebookImg from "../../images/notebook.jpeg";
import mouseImg from "../../images/mouse.jpeg";
import styled from "styled-components";
import ProductDetail from "../ProductDetail";
import { useState } from "react";

const datas = [
  {
    _id: 1,
    img: deskImg,
    name: "책상",
    detail: "상세정보",
    price: 30000,
  },
  {
    _id: 2,
    img: notebookImg,
    name: "노트북",
    detail: "상세정보",
    price: 1000000,
  },
  {
    _id: 3,
    img: mouseImg,
    name: "마우스",
    detail: "상세정보",
    price: 50000,
  },
];

const ListComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

function ProductList() {
  const [detailProduct, setDetailProduct] = useState(null);

  return (
    <ListComponent>
      {datas.map((data) => (
        <ProductInfo data={data} onClick={() => setDetailProduct(data)} />
      ))}

      {detailProduct !== null && (
        <ProductDetail
          detailProduct={detailProduct}
          setDetailProduct={setDetailProduct}
        />
      )}
    </ListComponent>
  );
}

export default ProductList;
