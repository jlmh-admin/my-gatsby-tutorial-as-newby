import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import {Link, graphql } from 'gatsby';

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here:</p>
      
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`/blog/${node.frontmatter.slug}`}>Posted: {node.frontmatter.date}</Link></h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage