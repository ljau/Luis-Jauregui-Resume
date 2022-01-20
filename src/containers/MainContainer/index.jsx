import React from "react";
import {
  CustomLabel,
  CustomText,
  FlexContainer,
  SideContainer,
  SubtitleLabel,
} from "..";
import { aboutMe, education, experience } from "../../library";

export const MainContainer = () => {
  return (
    <SideContainer w="70%">
      <FlexContainer bg="orange" h="20%" w="90%" align>
        <CustomLabel>About Me</CustomLabel>
        <CustomText>{aboutMe.about}</CustomText>
      </FlexContainer>

      <FlexContainer bg="yellow" h="20%" w="90%" align>
        <CustomLabel>Education</CustomLabel>
        {education.map((text) => (
          <FlexContainer key={text.degree} align>
            <SubtitleLabel>{text.degree}</SubtitleLabel>
            <SubtitleLabel color="gray">
              {text.school + " | " + text.time}
            </SubtitleLabel>
            <CustomText>{text.details}</CustomText>
          </FlexContainer>
        ))}
      </FlexContainer>

      <FlexContainer bg="cyan" h="20%" w="90%" align>
        <CustomLabel>Experience</CustomLabel>
        {experience.map((text) => (
          <FlexContainer key={text.key} align>
            <SubtitleLabel>{text.role}</SubtitleLabel>
            <SubtitleLabel color="gray">
              {text.company + " | " + text.time}
            </SubtitleLabel>
            <CustomText>{text.details}</CustomText>
          </FlexContainer>
        ))}
      </FlexContainer>

      <FlexContainer bg="purple" h="20%" w="90%" align>
        <CustomLabel>Technical Skills</CustomLabel>
      </FlexContainer>
    </SideContainer>
  );
};
