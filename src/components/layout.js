import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li className="gatsbylink">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {

  return (
    <div className="wrapper">
      <div className="content">
        <header className="mb-4">
          <Link to="/" className="homepage" >
            <p className="hometitle" >Chen Ma's Portfolio</p>
          </Link>
          <ul className="navbar">
            <ListLink to="/" ><div className="navbarlink">Home</div></ListLink>
            <ListLink to="/projects/"><div className="navbarlink">Projects</div></ListLink>
            <ListLink to="/gallery/"><div className="navbarlink">Gallery</div></ListLink>
          </ul>
        </header>
        {children}
      </div>
      <footer>
      <p>
        Designed and built by Chen
      </p>
      </footer>
    </div>
  )
}