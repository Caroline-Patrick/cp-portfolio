import * as React from 'react'
import { Link } from 'gatsby'
import {container, heading, navLinks, navLinkItem, navLinkText} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/projects" className={navLinkText}>Projects</Link></li>
          <li className={navLinkItem}><Link to="/resumeJS" className={navLinkText}>Resume</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}    
      </main>
    </div>
  )
}

export default Layout