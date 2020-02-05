import React from 'react'
import Layout from '../components/layout'
import { Link as NumberLink } from 'gatsby'
import { Link as ButtonLink } from 'gatsby'
import styled from 'styled-components'
import { Button, Card, CardDeck, Container } from 'react-bootstrap'

const Pagination = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
`
const BLink = styled(ButtonLink)`
    text-decoration: none;
    color: white;
    
    &:hover ${BLink} {
        color: red;
        text-decoration: none;
      }
`

const PageNumberWrapper = styled.div`
    border: 1px solid #eee;
    background: ${props => props.isCurrentPage ? '#eee' : 'white'}
`

const PageNumber = styled(NumberLink)`
    display: block;
    padding: 8px 16px;
`

export default ({ pageContext }) => (
    <Layout>
        <Container>
            <CardDeck>
            {pageContext.posts.map(post => (
                <Card key={post.node.wordpress_id}>
                    <Card.Img variant="top" src={post.node.featured_media.source_url} />
                    <Card.Body>
                        <Card.Title dangerouslySetInnerHTML={{__html: post.node.title}} />
                        <small>{post.node.date} </small>
                        <Card.Text dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
                        <Button variant="primary">
                            <BLink to={`/post/${post.node.slug}`}>
                                Read more
                            </BLink>
                        </Button>
                    </Card.Body>
                </Card>
            ))}
            </CardDeck>
            <Pagination>
                {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
                    <div key={index}>
                        <PageNumberWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
                            <PageNumber to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
                                {index + 1}
                            </PageNumber>
                        </PageNumberWrapper>
                    </div>
                ))}
            </Pagination>
        </Container>
    </Layout>
)

