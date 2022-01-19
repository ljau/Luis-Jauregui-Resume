import React from "react";
import { CustomLabel, FlexContainer, MainBarContainer } from "..";

export const MainContainer = () => {
  return (
    <MainBarContainer>
      <FlexContainer bg="orange" h="20%">
        <CustomLabel>About Me</CustomLabel>
      </FlexContainer>
      <FlexContainer bg="yellow" h="20%">
        <CustomLabel>Education</CustomLabel>
      </FlexContainer>
      <FlexContainer bg="cyan" h="20%">
        <CustomLabel>Experience</CustomLabel>
      </FlexContainer>
      <FlexContainer bg="purple" h="20%">
        <CustomLabel>Technical Skills</CustomLabel>
      </FlexContainer>
      <FlexContainer bg="pink" h="20%">
        <CustomLabel>Technical Skills</CustomLabel>
      </FlexContainer>
    </MainBarContainer>
  );
};
