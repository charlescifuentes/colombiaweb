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

const LayoutWrapper = style.div`
  margin: 20px;
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
        <MainMenu />
        <LayoutWrapper>
          {children}
        </LayoutWrapper> 
  </div>
)

export default Layout
