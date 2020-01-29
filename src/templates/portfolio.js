import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
  max-width: 500px;
  margin: 16px 0;
`  

export default ({pageContext}) => (
  <div>
    <Layout>
      <h1>{pageContext.title}</h1>
      <FeaturedImage src={pageContext.featured_media.source_url} alt="Thumbnail" />
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
  </div>
)