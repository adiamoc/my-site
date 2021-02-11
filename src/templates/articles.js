import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";

export default function Article({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1 className="articletitle">{post.frontmatter.title}</h1>
        <div className="article">
          <div className="summary">
            <p>{post.frontmatter.summary}</p>
          </div>
          <div className="tools">
            <p>Built with:</p>
            <p className="toolname">{post.frontmatter.tools}</p>
            <p>My role:</p>
            <p className="toolname">{post.frontmatter.role}</p>
          </div>
          <Img fluid={post.frontmatter.heroimg.childImageSharp.fluid} className="heroimg"/>  
        </div>
        
        <div className="articlecontent">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        role
        summary
        tools
        heroimg {
          childImageSharp {
            fluid(maxWidth: 1080,quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      
    }
  }
`