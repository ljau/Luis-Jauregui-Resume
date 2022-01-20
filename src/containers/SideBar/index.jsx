import React from "react";
import { SideContainer, CustomLabel, FlexContainer } from "..";
import { myName } from "../../library";

export const SideBar = () => {
  return (
    <SideContainer w="30%">
      <FlexContainer h="300%" minHeight="30vh" bg="blue">
        <CustomLabel color="white" >{myName.name}</CustomLabel>
      </FlexContainer>

      <FlexContainer h="70%" minHeight="60vh" bg="gray" jc="flex-start">
        <FlexContainer>
          <CustomLabel>Contact</CustomLabel>
        </FlexContainer>
        
        <FlexContainer bg="yellow">
          <CustomLabel>Hello from side bar bottom</CustomLabel>
        </FlexContainer>
      </FlexContainer>
    </SideContainer>
  );
};
