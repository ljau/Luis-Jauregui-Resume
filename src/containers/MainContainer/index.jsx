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
    <SideContainer w="70%" bg="white">
      <FlexContainer minHeight="90vh">
        <FlexContainer h="20%" w="90%" align>
          <CustomLabel color="#7b08ff" >About Me</CustomLabel>
          <CustomText>{aboutMe.about}</CustomText>
        </FlexContainer>

        <FlexContainer h="20%" w="90%" align>
          <CustomLabel color="#7b08ff">Education</CustomLabel>
          {educationDetails}
        </FlexContainer>

        <FlexContainer h="20%" w="90%" align>
          <CustomLabel color="#7b08ff">Experience</CustomLabel>
          {experienceDetails}
        </FlexContainer>
      </FlexContainer>
    </SideContainer>
  );
};
