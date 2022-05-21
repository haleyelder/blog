/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>, a web developer living in the Pacific Northwest, looking for their first developer role while working through <a href="https://cs50.harvard.edu/python/2022/" rel="noreferrer" target="_blank">CS50P</a> (Intro to Programming with Python); more <a href="https://craft-and-code.netlify.app/about-this-blog" rel="noreferrer" >about this blog &gt;&gt;</a> 
          <hr></hr>
          Connect with me on <a href="https://www.twitter.com/haley_elder">Twitter &gt;&gt;</a> //
          More on my <a href="https://haleyelder.com">Website &gt;&gt;</a>
        </p>
      )}
    </div>
  )
}

export default Bio
