import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import {
  HomeLeftContainer,
  HomeRightContainer,
} from '../components/layout/Layout.style';
const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 1rem 0;
`;
export default ({ pageContext }) => (
  <Layout>
    <HomeLeftContainer className="column">
      <h1>{pageContext.title}</h1>
      <strong>Website url:</strong>
      <a
        href={pageContext.acf.portfolio_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {pageContext.acf.portfolio_url}
      </a>
      <div>
        <FeaturedImage src={pageContext.featured_media.source_url} />
      </div>
    </HomeLeftContainer>
    <HomeRightContainer className="column is-7">
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </HomeRightContainer>
  </Layout>
);
