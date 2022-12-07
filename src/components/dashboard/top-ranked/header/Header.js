import React from "react";
import classes from "./Header.module.css";
import PropTypes from "prop-types";
import Sort from "./sort/Sort"


const Header = ({handleChange,ascendingHandleChange,descendingHandleChange,isChecked}) =>{
  
  return(
    <div className={classes.container}>
    <div>
        <input onChange={handleChange} className={classes.input} type="date" />
    </div>
    <Sort isChecked={isChecked} ascendingHandleChange={ascendingHandleChange} descendingHandleChange={descendingHandleChange} />

  </div>
  )
}
export default Header;

Header.propTypes = {
   isChecked:PropTypes.object,
    handleChange:PropTypes.func.isRequired,
    ascendingHandleChange:PropTypes.func.isRequired,
    descendingHandleChange:PropTypes.func.isRequired,
  };