/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from './MainMenu'
import style, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`
const LayoutWrapper = style.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)

export default Layout
