import React from "react";
import { Layout, SideBar } from "../../containers";
import { MainContainer } from "../../containers";
import { TableContainer } from "./styled";

export const MainPage = () => {
  return (
    <Layout>
      <TableContainer
        align
        w="60%"
        marginTop="5vh"
        marginBot="5vh"
        bg="blue"
        minWidth="720px"
        isMainBlock
      >
        <MainContainer />
        <SideBar />
      </TableContainer>
    </Layout>
  );
};
