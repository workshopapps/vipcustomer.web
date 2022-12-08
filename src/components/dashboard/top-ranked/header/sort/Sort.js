import React,{useState} from "react";
import classes from "./Sort.module.css";
import PropTypes from "prop-types";


const Sort = ({ascendingHandleChange,descendingHandleChange,isChecked}) =>{
  
    const [modal,setModal] = useState(false)
    const handleClick =() =>{
        setModal(prev => !prev)
    }
    return(
        <div className={classes.parent} >
        <div onClick={handleClick} className={classes.sort}>
        <p>Sort</p>
        </div>
      {modal &&  <Modal isChecked={isChecked} ascendingHandleChange={ascendingHandleChange} descendingHandleChange={descendingHandleChange}/>  }
    </div>
    )
}
export default Sort;


export const Modal = ({isChecked,ascendingHandleChange,descendingHandleChange}) =>{

    return(
        <div className={classes.modal}>
            <div className={classes.input}>
            <input checked={isChecked.ascending} onChange ={ascendingHandleChange} name="ascending" className={classes.checkbox} type="checkbox" id="ascending" />
            <label htmlFor="ascending">Ascending</label><br/>
          </div>
          <div className={classes.input}>
            <input checked={isChecked.descending} onChange ={descendingHandleChange} name="descending" className={classes.checkbox} type="checkbox" id="Ascending" />
            <label htmlFor="ascending">Descending</label>
        </div>
        </div>
    )
}

Sort.propTypes = {
   isChecked:PropTypes.object,
   descendingHandleChange:PropTypes.func.isRequired,
   ascendingHandleChange:PropTypes.func.isRequired,
  };
Modal.propTypes = {
    isChecked:PropTypes.object,
    descendingHandleChange:PropTypes.func.isRequired,
    ascendingHandleChange:PropTypes.func.isRequired,
  };
