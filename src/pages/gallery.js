import React from "react"
import Layout from "../components/layout"
import Gallery from "../gatsby-image-gallery/src"
import { graphql } from "gatsby"

export default function Photo({ data }) {
  const graphic = data.graphic.edges.map(({ node }) => ({
    ...node.childImageSharp,
  }))
  const text = data.text.edges.map(({ node }) => ({
    ...node.childImageSharp,
  }))
  const brand = data.brand.edges.map(({ node }) => ({
    ...node.childImageSharp,
  }))

  return (
    <Layout>
      <h1 className="gallerytitle"><span className="emphsis display-1">G</span>raphic</h1>
      <div className="mx-2 mb-5">
        <Gallery images={graphic}/>
      </div>
      <h1 className="gallerytitle"><span className="emphsis display-1">T</span>ext</h1>
      <div className="mx-2 mb-5">
        <Gallery images={text}/>
      </div>
      <h1 className="gallerytitle"><span className="emphsis display-1">B</span>rand</h1>
      <div className="mx-2 mb-5">
        <Gallery images={brand}/>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ImagesForGallery {
    graphic: allFile(
      filter: { relativeDirectory: { eq: "images/graphic" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
            full: fluid(maxWidth: 1080,quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    text: allFile(
      filter: { relativeDirectory: { eq: "images/text" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
            full: fluid(maxWidth: 1080,quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    brand: allFile(
      filter: { relativeDirectory: { eq: "images/brand" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
            full: fluid(maxWidth: 1080,quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`