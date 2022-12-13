import React from 'react';
import classes from "../ranks/Topranked.module.css";
import PropTypes from "prop-types";



const Error = ({fetchRankData}) => {
  return (
    <div className={classes.error}>
      <h3  className={classes.errormessage}>An error occured</h3>
       <button className={classes.errorbutton} onClick={fetchRankData}>Try again</button>
    </div>
  )
}

export default Error;

Error.propTypes = {
   fetchRankData:PropTypes.func.isRequired,

 };