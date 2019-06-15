import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
`;

const PortfolioItems = () => (
  <>
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                title
                slug
                excerpt
                content
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props =>
        props.allWordpressWpPortfolio.edges.map(portfolioItem => (
          <div key={portfolioItem.node.id}>
            <h2>{portfolioItem.node.title}</h2>
            <img
              src={portfolioItem.node.featured_media.source_url}
              alt="thumbnail"
            />
            <div
              dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }}
            />
            <Link to={`/portfolio/${portfolioItem.node.slug}`}>Read More</Link>
          </div>
        ))
      }
    />
  </>
);
export default PortfolioItems;
