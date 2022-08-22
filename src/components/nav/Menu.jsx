import styled from "styled-components";
import { Link } from "react-router-dom";

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 15px;
  color: #929292;
  font-weight: bold;
  width: 250px;
  max-width: 250px;
  background-color: #3a3b3c;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.clicked ? "500px" : "0")};
  overflow: hidden;
  width: 100%;
  background-color: #181818;
  position: absolute;
  justify-content: center;
  align-items: center;
  transition: height 500ms;
  

  @media (min-width: 768px) {
    display: none;
  }
`;

const H3 = styled.h4`
  margin-top: 20px;
  background-color: #3a3b3c;
  padding: 7px;
  border-radius: 20px;
  width: 250px;
  aling-self: center;
  color: #929292;
  aling-text: start;
`;

const Menu = (props) => {
  return (
    <MenuBar clicked={props.clicked}>
      <Input type="text" placeholder="Search..." />
      <H3>Explore</H3>
      <Link to="/home/create">
        <H3>Create</H3>
      </Link>
    </MenuBar>
  );
};

export default Menu;
