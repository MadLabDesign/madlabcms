import React from 'react';
import Layout from '../components/layout';

export default ({ pageContext }) => (
  <Layout>
    <h1
      className="content__title animated slideInUp delay-0.3s"
      dangerouslySetInnerHTML={{ __html: pageContext.title }}
    />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
);
