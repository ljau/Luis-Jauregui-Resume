import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: ${({ h }) => h ?? "100%"};
  width: ${({ w }) => w ?? "100%"};
  display: flex;
  justify-content: ${({ jc }) => jc ?? "flex-start"};
  align-items: flex-start;
  flex-direction: ${({ dir }) => dir ?? "column"};
  word-wrap: break-word;

  @media (max-width: 1080px){
      align-items: center;
  }
`;
