import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Docs.module.css'


const DocsSidebar = () => {
  return (
    <div className={styles.maindiv}>
      <div id="mySidenav" className={styles.sidenav}>
        <div className={styles.linksdiv}>
          <h2>Overview</h2>
            <p><Link to="/usage" className={styles.li}>Introduction</Link></p>
            <p><Link to="/usage" className={styles.li}>Quick Start</Link></p>       
        </div>

        <div className={styles.linksdiv}>
          <h2>API Documentation</h2>
            <p><Link to="/documents/usage" className={styles.li}>Usage</Link></p>
            <p><Link to="/documents/search" className={styles.li}>Search</Link></p>
            <p><Link to="/documents/searchmany" className={styles.li}>Search-Many</Link></p>
            <p><Link to="/documents/history" className={styles.li}>History</Link></p>
          
        </div>
                
                
        </div>
    </div>
  )
}

export default DocsSidebar