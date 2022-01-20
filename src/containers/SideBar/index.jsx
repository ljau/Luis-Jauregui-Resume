import React from "react";
import { SideContainer, CustomLabel, FlexContainer, SubtitleLabel } from "..";
import { contact, myName } from "../../library";

export const SideBar = () => {
  
  const getContact = contact.map((text) => {
    return <SubtitleLabel key={text.key} fontS="100%" >{text.data}</SubtitleLabel>;
  });

  return (
    <SideContainer w="30%">
      <FlexContainer h="30%" minHeight="30vh" bg="blue">
        <CustomLabel color="white">{myName.name}</CustomLabel>
      </FlexContainer>

      <FlexContainer h="70%" minHeight="60vh" bg="gray" jc="flex-start">
        <FlexContainer align  >
          <CustomLabel>Contact</CustomLabel>
          {getContact}
        </FlexContainer>

        <FlexContainer bg="yellow">
          <CustomLabel>Hello from side bar bottom</CustomLabel>
        </FlexContainer>
      </FlexContainer>
    </SideContainer>
  );
};
