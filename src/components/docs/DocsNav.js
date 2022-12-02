import React from 'react'
import SF from './STAR-FINDER-LOGO.png'
import styles from './Docs.module.css'
import { BsSearch } from 'react-icons/bs';

const DocsNav = () => {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.nav}> 
        <div className={styles.navlogo}>
            <img src={SF} alt="" className={styles.logo}/>
        </div>
        <div className={styles.navsearchdiv} >

            <input type="search" placeholder='Search' id='search' name='search-bar' className={styles.navsearch}/>
        </div>
        <div className={styles.navlinks}>
            <a href='https://github.com/workshopapps/vipcustomer.web' className={styles.navlink}>Github</a>
        </div>
        
    </div>
    </div>
    
  )
}

export default DocsNav