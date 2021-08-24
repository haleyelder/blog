/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>, a front end web developer learning computer science concepts from Harvard's <a href="https://cs50.harvard.edu/x/2021/" target="_blnak">CS50 course</a>; more <a href="https://craft-and-code.netlify.app/about-this-blog">about this blog &gt;&gt;</a> 
          {' '}
          <hr></hr>
          Connect with me on <a href="https://www.twitter.com/haley_elder">Twitter &gt;&gt;</a> //
          {' '}
          More on my <a href="https://haleyelder.com">Website &gt;&gt;</a>
        </p>
      )}
    </div>
  )
}

export default Bio
