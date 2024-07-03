import styled from "styled-components";
// Header Styled - Components :

// Header - Icons :
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 20px 40px;
  background-color: #181414;
`;

const HeaderLogo = styled.h3`
  font-size: 28px;
  color: #f06c34;
  text-transform: uppercase;
  margin-right: 120px;
`;

const HeaderIconList = styled.ul`
  display: flex;
  gap: 35px;
  align-items: center;
  margin-right: auto;
`;

const HeaderIcon = styled.li<{ primary?: boolean }>`
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${(props) => (props.primary ? "white" : "gray")};
  cursor: pointer;
  i {
    font-size: 20px;
  }
`;

const HeaderIconText = styled.p`
  font-size: 14px;
`;

// Header - Buttons :
const HeaderButtonList = styled.ul`
  display: flex;
  gap: 18px;
  align-items: center;
`;

const HeaderSearchInput = styled.input`
  padding: 5px 18px;
  color: gray;
  background-color: transparent;
  border: 0px;
  border-radius: 5px;
`;

export {
  HeaderContainer,
  HeaderLogo,
  HeaderIconList,
  HeaderIcon,
  HeaderIconText,
  HeaderButtonList,
  HeaderSearchInput,
};
