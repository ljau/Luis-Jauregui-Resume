import React from "react";
import { FlexContainer, Layout, SideBar } from "../../containers";
import { MainContainer } from "../../containers";

export const MainPage = () => {
  return (
    <Layout>
      <FlexContainer dir="row" align w="50%" marginTop="5vh" marginBot="5vh" bg="blue">
        <MainContainer />
        <SideBar />
      </FlexContainer>
    </Layout>
  );
};
