import styled from "styled-components";
export const Button = styled.button<{ primary: string }>`
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => (props.primary === "true" ? " 0px" : "2px solid gray")};
  padding: 5px 15px;

  background-color: ${(props) =>
    props.primary === "true" ? " #f06c34" : "#181414"};
  color: ${(props) => (props.primary === "true" ? "#181414" : "#f06c34")};
  text-transform: capitalize;
  font-weight: bolder;
`;
