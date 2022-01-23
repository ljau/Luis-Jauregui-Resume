import React from "react";
import { SideContainer, CustomLabel, FlexContainer, SubtitleLabel } from "..";
import {
  contact,
  frameworks,
  languages,
  myName,
  skillsSectionsList,
  softSkills,
} from "../../library";
import { SkillsContainer } from "./styled";

export const SideBar = () => {
  const getData = (text) => {
    return (
      <SubtitleLabel key={text.description} fontS="95%" color="white" >
        {text.description}
      </SubtitleLabel>
    );
  };

  const getDetails = (section) => {
    switch (section) {
      case "Frameworks":
        return frameworks.map((data) => {
          return getData(data);
        });
      case "Contact":
        return contact.map((data) => {
          return getData(data);
        });
      case "Languages":
        return languages.map((data) => {
          return getData(data);
        });
      case "Soft-Skills":
        return softSkills.map((data) => {
          return getData(data);
        });
      default:
        break;
    }
  };
 
  const showContainers = skillsSectionsList.map((data) => {
    return (
      <SkillsContainer key={data.title} >
        <CustomLabel color="yellow">{data.title}</CustomLabel>
        {getDetails(data.title)}
      </SkillsContainer>
    );
  });

  return (
    <SideContainer w="30%" >
      <FlexContainer h="30%" minHeight="30vh" bg="#081199d8" >
        <CustomLabel padding="5%" color="yellow">{myName.name}</CustomLabel>
      </FlexContainer>

      <FlexContainer h="70%" w="85%" minHeight="60vh" jc="flex-start">
        {showContainers}
      </FlexContainer>
    </SideContainer>
  );
};
