import React from "react";
import classes from "./Paginate.module.css";
import PropTypes from "prop-types";


const Paginate =({postPerPage, totalPost,paginate,currentPage}) =>{

  const pageNumbers =[];
  for(let i = 1; i < Math.ceil(totalPost/postPerPage); i++){
    pageNumbers.push(i)
  } 
  return(
    <ul className={classes.listContainer}>
{pageNumbers.map(number =>{
  return <li  style={currentPage === number? {backgroundColor:"#091540",color:"white"}:{backgroundColor:"#EEEEEE",}} onClick={()=>{paginate(number)}} className={classes.listItem} key={number}>{number}</li>
})
}    </ul>
  )
}
export default Paginate;

Paginate.propTypes = {
    postPerPage: PropTypes.number.isRequired,
    totalPost: PropTypes.number,
    currentPage: PropTypes.number,
    paginate:PropTypes.func.isRequired,
  };