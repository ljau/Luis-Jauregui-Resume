import React from "react";
import { Layout, SideBar } from "../../containers";
import { MainContainer } from "../../containers";

export const MainPage = () => {
  return (
    <Layout>      
      <MainContainer />
      <SideBar />
    </Layout>
  );
};
