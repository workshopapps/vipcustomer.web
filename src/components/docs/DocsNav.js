import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SF from './STAR-FINDER-LOGO.png'
import styles from './Docs.module.css'
import { BsSearch } from 'react-icons/bs';
import { FiAlignJustify, FiX} from "react-icons/fi";


const DocsNav = () => {

  const [ isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded)
  }

  return (
  
    <div className={styles.navcontainer}>
      <div className={styles.nav}> 
        <div className={styles.navlogo}>
            <img src={SF} alt="" className={styles.logo}/>
        </div>
        <div className={styles.navsearchdiv} >
            <input type="search" placeholder='Search' id='search' name='search-bar' className={styles.navsearch}/>
        </div>
        <div className={ styles.menubar }>
          <FiAlignJustify onClick={ handleExpand }/>
        </div>
        <div className={styles.navlinks}>
            <a href='https://github.com/workshopapps/vipcustomer.web' className={styles.navlink}>Github</a>
        </div>
        <div className={ isExpanded ? styles.showrightsidebar + " " + styles.rightsidebar : styles.rightsidebar}>
        <div id="mySidenav">
          <div className={ styles.menubar }>
            <FiX onClick={ handleExpand }/>
          </div>
        <div className={styles.linksdiv}>
          <h2>Overview</h2>
            <p><Link to="/documents" className={styles.li}>Introduction</Link></p>
            <p><Link to="/documents/quick" className={styles.li}>Quick Start</Link></p>       
        </div>
       

        <div className={styles.linksdiv}>
          <h2>API Documentation</h2>
            <p><Link to="/documents/usage" className={styles.li}>Usage</Link></p>
            <p><Link to="/documents/search" className={styles.li}>Search</Link></p>
            <p><Link to="/documents/searchmany" className={styles.li}>Search-Many</Link></p>
            <p><Link to="/documents/history" className={styles.li}>History</Link></p>      
        </div>
                
        </div>

        <div className={styles.navsearch} >
            <input type="search" placeholder='Search' id='search' name='search-bar' className={styles.navsearch}/>
        </div>
        </div>
        
        </div>
      </div>
  );
}

export default DocsNav