import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import style from 'styled-components'
import Siteinfo from './Siteinfo'
import Logo from './Logo'

const MainMenuWrapper = style.div`
  display: flex;
  background-color: rgb(3,27,77);
`

const MainMenuInner = style.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MenuItem = style(Link)`
  color: white;
  display: block;
  padding: 15px 20px
`

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressMenusMenusItems(filter: {
          name: {
            eq: "Main Menu"
          }
        }) {
          edges {
            node {
              name
              items {
                title
                slug
              }
            }
          }
        }
      }
    `} render={props => (
        <MainMenuWrapper>
          <MainMenuInner>
            <Logo />
            <Siteinfo />
              {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
                  <MenuItem to={item.slug} key={item.title}>
                      {item.title}
                  </MenuItem>
              ))}
          </MainMenuInner>
        </MainMenuWrapper>
    )} />
)

export default MainMenu