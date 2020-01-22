import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import style from 'styled-components'

const MainMenuWrapper = style.div`
  display: flex;
  background-color: rgb(3,27,77);
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
            {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
                <Link to={item.slug} key={item.title}>
                    {item.title}
                </Link>
            ))}
        </MainMenuWrapper>
    )} />
)

export default MainMenu