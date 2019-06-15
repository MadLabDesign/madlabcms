import React from "react";
import MainMenu from "./MainMenu";
import "../assets/styles.css";

import styled, { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
body{
  font-family: "metropolis-regular";
  margin: 0 !important;
  padding: 0 !important;

}
`;

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </>
);

export default Layout;
