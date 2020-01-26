import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

const PortfolioItems = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio {
              edges {
                node {
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
        `} render={props => props.allWordpressWpPortfolio.edges.map(portfolioitem => (
            <div key={portfolioitem.node.id} >
                <h2>{portfolioitem.node.title}</h2>
                <img src={portfolioitem.node.featured_media.source_url} alt="Thumbnail" />
                <div dangerouslySetInnerHTML={{__html: portfolioitem.node.excerpt}} />
                <Link to={`/portfolio/${portfolioitem.node.slug}`}>Read More</Link>
            </div>
        )) } />
    )
}

export default PortfolioItems