import React from 'react'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'

export default ({pageContext}) => (
  <Layout>
    <Container>
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Container>
  </Layout>
)