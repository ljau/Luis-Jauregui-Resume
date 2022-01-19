import React from "react";
import { SideBarContainer, CustomLabel, FlexContainer } from "..";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <FlexContainer h="30%" minHeight="25vh">
        <CustomLabel>Hello from side bar top</CustomLabel>
      </FlexContainer>
      <FlexContainer h="70%" minHeight="65vh" bg="gray">
        <CustomLabel>Hello from side bar bottom</CustomLabel>
      </FlexContainer>
    </SideBarContainer>
  );
};
