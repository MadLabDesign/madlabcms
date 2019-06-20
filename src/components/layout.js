import React from 'react';
import MainMenu from './MainMenu';
import '../assets/animate.css';
import '../assets/bulma.min.css';
import '../assets/styles.css';

import { GlobalStyles, LayoutWrapper } from './layout/Layout.style';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </>
);

export default Layout;
