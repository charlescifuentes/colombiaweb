import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Logo from './Logo'
import { Nav, Navbar } from 'react-bootstrap'

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
      <Navbar bg="primary" expand="lg" fixed="top">
        <Navbar.Brand className="logo" href="#home"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
                <Link to={`/${item.slug}`} key={item.title} activeClassName="active" className="nav-link">{item.title}</Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )} />
)

export default MainMenu