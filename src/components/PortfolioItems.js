import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const PortfolioItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`
const PortfolioImage = styled.img`
  max-width: 100%;
`

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
        `} render={props => (
          <PortfolioItemsWrapper>
          {props.allWordpressWpPortfolio.edges.map(portfolioitem => (
            <PortfolioItem key={portfolioitem.node.id} >
                <h2>{portfolioitem.node.title}</h2>
                <PortfolioImage src={portfolioitem.node.featured_media.source_url} alt="Thumbnail" />
                <div dangerouslySetInnerHTML={{__html: portfolioitem.node.excerpt}} />
                <Link to={`/portfolio/${portfolioitem.node.slug}`}>Read More</Link>
            </PortfolioItem>
        ))}
        </PortfolioItemsWrapper> )} />
    )
}

export default PortfolioItems