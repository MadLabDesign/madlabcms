import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
body{
  font-family: "metropolis-regular";
  margin: 0 !important;
  padding: 0 !important;
  background-color: #000000;
  color: #ffffff;
}
`;

export const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
