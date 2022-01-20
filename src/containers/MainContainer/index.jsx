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
  const fillDetails = ({ ...data }) => {
    return (
      <FlexContainer key={data.key} align>
        <SubtitleLabel>{data.role}</SubtitleLabel>
        <SubtitleLabel color="gray">
          {data.place + " | " + data.time}
        </SubtitleLabel>
        <CustomText>{data.details}</CustomText>
      </FlexContainer>
    );
  };

  const educationDetails = education.map((data) => {
    return fillDetails(data);
  });

  const experienceDetails = experience.map((text) => {
    return fillDetails(text);
  });

  return (
    <SideContainer w="70%">
      <FlexContainer minHeight="90vh">
        <FlexContainer bg="orange" h="20%" w="90%" align>
          <CustomLabel>About Me</CustomLabel>
          <CustomText>{aboutMe.about}</CustomText>
        </FlexContainer>

        <FlexContainer bg="yellow" h="20%" w="90%" align>
          <CustomLabel>Education</CustomLabel>
          {educationDetails}
        </FlexContainer>

        <FlexContainer bg="cyan" h="20%" w="90%" align>
          <CustomLabel>Experience</CustomLabel>
          {experienceDetails}
        </FlexContainer>
      </FlexContainer>
    </SideContainer>
  );
};
