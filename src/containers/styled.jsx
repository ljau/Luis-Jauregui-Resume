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

export const SideContainer = styled.div`
  background-color: lightblue;
  height: 100%;
  width: ${({ w }) => w ?? "100%"};
  min-height: 90vh;
  display: flex;
  justify-content: ${({ jc }) => jc ?? "center"};
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
  flex-direction: ${({ dir }) => dir ?? "column"};
`;

export const FlexContainer = styled.div`
  background-color: ${({ bg }) => bg ?? "transparent"};
  height: ${({ h }) => h ?? "100%"};
  width: ${({ w }) => w ?? "100%"};
  display: flex;
  justify-content: ${({ jc }) => jc ?? "flex-start"};
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
  flex-direction: ${({ dir }) => dir ?? "column"};
  min-height: ${({ minHeight }) => minHeight ?? "undefined"};
  min-width: ${({ minWidth }) => minWidth ?? "undefined"};
  margin-top: ${({ marginTop }) => marginTop ?? "undefined"};
  margin-bottom: ${({ marginBot }) => marginBot ?? "undefined"};
  word-wrap: break-word;
`;

export const CustomLabel = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${({ color }) => color ?? "black"};
`;

export const SubtitleLabel = styled.h1`
  font-size: ${({ fontS }) => fontS ?? "18px"};
  font-weight: bold;
  color: ${({ color }) => color ?? "black"};
  margin: 1px;
  padding: 2px;
  word-wrap: break-word;
`;

export const CustomText = styled.p`
  font-size: 16px;  
  color: ${({ color }) => color ?? "black"};
  text-align: ${({ textAlign }) => textAlign ?? "justify"};
  text-justify: inter-word;
  padding: 5px;
`;