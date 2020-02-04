import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import style from 'styled-components'
import Siteinfo from './Siteinfo'
import Logo from './Logo'
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

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
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
                <Link to={`/${item.slug}`} key={item.title} className="nav-link">{item.title}</Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )} />
)

export default MainMenu