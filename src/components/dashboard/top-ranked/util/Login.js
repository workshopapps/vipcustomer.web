import React from "react";
import { Link} from "react-router-dom";
import classes from "./Login.module.css";


const Login = () =>{
  return(
    <Link to={"/login"}><div className={classes.login}><h3> Go to Login</h3></div></Link>
  )
}
export default Login