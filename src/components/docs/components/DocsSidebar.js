import React from "react";
import { Link } from "react-router-dom";
import styles from "./Docs.module.css";

const DocsSidebar = () => {
  return (
    <div className={styles.maindiv}>
      <div id="mySidenav" className={styles.sidenav}>
        <div className={styles.linksdiv}>
          <h2>Overview</h2>
          <p>
            <Link to="/docs" className={styles.li}>
              Introduction
            </Link>
          </p>
          <p>
            <Link to="/docs/quick" className={styles.li}>
              Quick Start
            </Link>
          </p>
        </div>

        <div className={styles.linksdiv}>
          <h2>API Documentation</h2>
          <p>
            <Link to="/docs/usage" className={styles.li}>
              Usage
            </Link>
          </p>
          <p>
            <Link to="/docs/search" className={styles.li}>
              Search
            </Link>
          </p>
          <p>
            <Link to="/docs/searchmany" className={styles.li}>
              Multi Search
            </Link>
          </p>
          <p>
            <Link to="/docs/history" className={styles.li}>
              History
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocsSidebar;
