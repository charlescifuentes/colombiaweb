import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import style from 'styled-components'

const SiteInfoWrapper = style.div`
    flex-grow: 1;
    color: white;
    margin: auto 0;
`

const SiteTile = style.div`
    font-weight: bold;
`

const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `} render={props => (
        <SiteInfoWrapper>
            <SiteTile>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTile>
            <div>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </div>
        </SiteInfoWrapper>
    )} />
)

export default SiteInfo