import classes from "./Paginate.module.css";

const Paginate =({postPerPage, totalPost,paginate}) =>{
  const pageNumbers =[];
  for(let i = 1; i < Math.ceil(totalPost/postPerPage); i++){
    pageNumbers.push(i)
  } 
  return(
    <ul className={classes.listContainer}>
{pageNumbers.map(number =>{
  return <li onClick={()=>{paginate(number)}} className={classes.listItem} key={number}>{number}</li>
})
}    </ul>
  )
}
export default Paginate;