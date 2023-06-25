import * as React from 'react'
import { Link } from 'gatsby'
import ProjectList from '../ProjectList'
import {container, heading, navLinks, navLinkItem, navLinkText} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
        <ProjectList></ProjectList>
      </main>
    </div>
  )
}

export default Layout