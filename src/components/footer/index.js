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
`;

function Footer() {
  return <FooterComponent>Footer 입니다.</FooterComponent>;
}

export default Footer;
