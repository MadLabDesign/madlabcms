import React from 'react';
import Layout from '../components/layout';

import {
  HomeLeftContainer,
  HomeRightContainer,
  HomeWrapper,
} from '../components/layout/Layout.style';
const HomePage = () => (
  <Layout>
    <HomeWrapper>
      <HomeLeftContainer className="column">
        <h3 className="animated slideInLeft delay-0.3s">
          Welcome to madlab design
        </h3>
        <h1 className="content__title animated slideInUp delay-0.3s">
          sssssss
        </h1>
      </HomeLeftContainer>
      <HomeRightContainer className="column is-7">right</HomeRightContainer>
    </HomeWrapper>
  </Layout>
);

export default HomePage;
