import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SideContainer, CustomLabel, FlexContainer, SubtitleLabel } from "..";
import {
  colors,
  contact,
  frameworks,
  languages,
  myName,
  skillsSectionsList,
  softSkills,
} from "../../library";
import { SkillsContainer } from "./styled";

export const SideBar = () => {
  const getData = (text,title) => {
    return (
      <SubtitleLabel key={text.description} fontS="95%" color={colors.white} >
       {title ==="Contact"? <FontAwesomeIcon icon={text.icon}/>: undefined} {text.description}
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
          return getData(data,"Contact");
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
        <CustomLabel color={colors.yellow}>
        <FontAwesomeIcon icon={data.icon}/> {data.title}
        </CustomLabel>
        {getDetails(data.title)}
      </SkillsContainer>
    );
  });

  return (
    <SideContainer w="22%" >
      <FlexContainer h="30%" minHeight="30vh" bg={colors.purple} >
        <CustomLabel padding="5%" color={colors.white}>{myName.name}</CustomLabel>
      </FlexContainer>

      <FlexContainer h="70%" w="85%" minHeight="60vh" >
        {showContainers}
      </FlexContainer>
    </SideContainer>
  );
};
