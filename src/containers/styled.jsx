import styled from "styled-components";

export const Layout = styled.div`
  background-color: #8282da;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const MainBarContainer = styled.div`
  background-color: green;
  height: 90%;
  width: 35%;
  min-height: 90vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const SideBarContainer = styled.div`
  background-color: blue;
  height: 90%;
  width: 15%;
  min-height: 90vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const FlexContainer = styled.div`
  background-color: ${({ bg }) => bg ?? "green"};
  height: ${({ h }) => h ?? "100%"};
  width: ${({ w }) => w ?? "100%"};
  display: flex;
  justify-content: ${({ jc }) => jc ?? "center"};
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
  flex-direction: ${({ dir }) => dir ?? "column"};
  min-height: ${({ minHeight }) => minHeight ?? "undefined"};
`;

export const CustomLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
