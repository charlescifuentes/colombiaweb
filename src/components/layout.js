/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from './MainMenu'
import style, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby' 

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  body, html {
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`
const LayoutWrapper = style.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <StaticQuery query={graphql`
    {
      allWordpressWpFavicon {
        edges {
          node {
            url {
              source_url
            }
          }
        }
      }
    }  
    `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />
        <GlobalStyles />
        <MainMenu />
        <LayoutWrapper>
          {children}
        </LayoutWrapper> 
  </div>
)

export default Layout
