import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Projects({data}) {
  return (
  	<div>
  	<div className="projsnap"></div>
  	<div className="projpage">
    <Layout>
      <h1 className="pagetitle"><span className="emphsis display-1">S</span>elected projects</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
      	  <Link to={node.fields.slug}>
		        <div key={node.id} className="proj">

						<h1 className="projtitle">
		          {node.frontmatter.title}
		        </h1>

		        <Img fluid={node.frontmatter.heroimg.childImageSharp.fluid} className="heroimg"/>
		        </div>
          </Link>
        </div>
      ))}
    </Layout>
    </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            heroimg {
		          childImageSharp {
		            fluid(maxWidth: 1080,quality: 90) {
		              ...GatsbyImageSharpFluid
		            }
		          }
	        	}
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`