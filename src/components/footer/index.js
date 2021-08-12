import styled from "styled-components";

const FooterComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  background-color: skyblue;
  color: white;
  font-size: 20px;
  & > button {
    width: 40px;
    height: 30px;
    margin: 0 4px;
    border-radius: 10px;
    background-color: green;
    color: white;
  }
  & > button:hover {
    opacity: 0.8;
  }
`;

function Footer({ setPage }) {
  return (
    <FooterComponent>
      <span>Footer 입니다.</span>
      <button onClick={() => setPage("list")}>List</button>
      <button onClick={() => setPage("cart")}>Cart</button>
    </FooterComponent>
  );
}

export default Footer;
