import React from 'react'
import Layout from '../components/layout'

export default ({pageContext}) => (
  <div>
    <Layout>
      <h1>{pageContext.title}</h1>
      <img src={pageContext.featured_media.source_url} alt="Thumbnail" />
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
  </div>
)