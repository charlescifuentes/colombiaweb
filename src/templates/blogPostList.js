import React from 'react'
import Layout from '../components/layout'
import { Link as NumberLink } from 'gatsby'
import { Link as ButtonLink } from 'gatsby'
import styled from 'styled-components'

const Pagination = styled.div`
    display: flex;
    justify-content: flex-end;
`

const BlogWrapper = styled.div`
    display: flex;
`

const BlogItem = styled.div`
    width: 450px;
    padding: 16px;
    margin: 16px;
    border-style: outset;          
`

const BLink = styled(ButtonLink)`
    text-decoration: none;
`

const PageNumberWrapper = styled.div`
    border: 1px solid #eee;
    background: ${props => props.isCurrentPage ? '#eee' : 'white'}
`

const PageNumber = styled(NumberLink)`
    display: block;
    padding: 8px 16px;
`

const FeaturedImage = styled.img`
    max-width: 100%;
`

export default ({ pageContext }) => (
    <Layout>
        <BlogWrapper>
        {pageContext.posts.map(post => (
            <BlogItem key={post.node.wordpress_id}>
                <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
                <FeaturedImage src={post.node.featured_media.source_url} />
                <small>{post.node.date} </small>
                <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
                <div>
                    <button><BLink to={`/post/${post.node.slug}`}>
                        Read more
                    </BLink></button>
                </div>
            </BlogItem>
        ))}
        </BlogWrapper>
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
    </Layout>
)

