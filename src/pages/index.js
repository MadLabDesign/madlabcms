import React from 'react';
import Layout from '../components/layout';
import {
  HomeLeftContainer,
  HomeRightContainer,
} from '../components/layout/Layout.style';
export default ({ pageContext }) => (
  <Layout>
    <HomeLeftContainer className="column">
      <h1
        className="content__title animated slideInUp delay-0.3s"
        dangerouslySetInnerHTML={{ __html: pageContext.title }}
      />
    </HomeLeftContainer>
    <HomeRightContainer className="column is-7">
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </HomeRightContainer>
  </Layout>
);
