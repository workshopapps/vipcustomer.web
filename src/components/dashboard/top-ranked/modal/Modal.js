import { AiFillInfoCircle,AiFillCloseCircle } from "react-icons/ai";
import classes from "./Modal.module.css";

const Modal = ()=>{
  return(
    <div className={classes.modal}>
  
     <div className={classes.error}>
   <AiFillInfoCircle  />
   <p className={classes.data}>No data found</p>
   </div>
    <p>The data you are looking for has not been recorded.</p> 
  </div>
  
 
  )
}
export default Modal;