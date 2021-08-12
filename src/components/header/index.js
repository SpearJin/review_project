import styled from "styled-components";

const HeaderComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  border: 1px solid black;
  background-color: skyblue;
  color: white;
  font-size: 20px;
`;

function Header() {
  return <HeaderComponent>Header 입니다.</HeaderComponent>;
}

export default Header;
