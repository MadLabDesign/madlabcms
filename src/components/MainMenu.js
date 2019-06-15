import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";
import SiteInfo from "./SiteInfo";
const MainMenuWrapper = styled.div`
  display: flex;
  background-color: #000;
  color: #fff;
`;

const MenuItem = styled(Link)`
  color: #fff;
  padding: 0.8rem;
  display: block;
  text-decoration: none;
`;

const MainMenu = () => (
  <>
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems(
            filter: { name: { eq: "Main Menu" } }
          ) {
            edges {
              node {
                name
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
      `}
      render={props => (
        <MainMenuWrapper>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItem to={`/${item.object_slug}`} key={item.title}>
                {item.title}
              </MenuItem>
            )
          )}
        </MainMenuWrapper>
      )}
    />
  </>
);

export default MainMenu;
