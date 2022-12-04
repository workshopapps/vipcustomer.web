import React,{useState,useEffect,useContext} from 'react';
import classes from "./Topranked.module.css";
import Header from "../header/Header"
import Paginations from "../Pagination"



const Topranked = () =>{
  const [loading,setLoading] = useState(false);
  const [datas,setDatas] = useState([]);
  const [page,setPage] = useState(1);
  const [post] = useState(10)

  const fetchRankData  =() =>{
  const user = { user: localStorage.getItem("user") || false };
   const users = JSON.parse(user.user);
    setLoading(true)
     fetch("https://api.starfinder.hng.tech/api/history/top-search",
     {headers:{
      Accept:"application/json",
      Authorization:`Bearer ${users.access_token}`
      }})
     .then((res)=> res.json())
     .then((data)=> setDatas(data))
    setLoading(false)
  }
  useEffect(()=>{
    fetchRankData()
  },[])

const indexOfLastPost = page * post;
console.log(indexOfLastPost)
const indexOfFirstPost = indexOfLastPost - post;
const currentPost = datas.slice(indexOfFirstPost,indexOfLastPost);

const paginate =(number)=>{
  setPage(number)
}
if(loading)
  return(
    <h3 className={classes.loading}>Loading..</h3>
  )
  return (
 
  <>
<div>
  <div className={classes.tablet}>
<section className={classes.container}>
  <Header />
    <div className={classes.tabletContainer} >
          <h3 className={classes.header}>Name</h3>
          <h3 className={classes.header}>Age</h3>
          <h3 className={classes.header}>Gender</h3>
          <h3 className={classes.header}>Occupation</h3>
          <h3 className={classes.header}>Rating</h3>
    </div>

    {currentPost.map((data, index) => {
      const { name, age, gender, occupation, vip_score} = data;
      const names = name.slice(0,1).toUpperCase() 
  
      return (
        <div key={index} className={classes.tabletContainer} >
          <p className={classes.text}>{name.slice(0,1).toUpperCase() + name.slice(1)}</p>
          <p className={classes.text} >{age || age === null? "none" : age}</p>
          <p className={classes.text} >{gender || gender === null? "none" : gender}</p>
          <p className={classes.text} >{occupation || occupation=== null? "none" : occupation}</p>
          <p className={classes.text} >{`${vip_score}%`}</p>
        </div>
      );
    })}
</section>
</div>


<div className={classes.mobile}>
<section className={classes.mobileContainer}>
<Header />
      {currentPost.map((data, index) => {
      const { name, age, gender, occupation, vip_score} = data;
      return (
        <div key={index} className={classes.mobileRow}>
         
       <div className={classes.row}>
        <span>Name:</span>
         <p>{name.slice(0,1).toUpperCase() + name.slice(1)}</p>
         </div>
       <div className={classes.row}>
        <span>Age:</span>
         <p>{age || age === null? "none" : age}</p>
         </div>
       <div className={classes.row}>
        <span>Gender:</span>
         <p>{gender || gender === null? "none" : gender}</p>
         </div>
       <div className={classes.row}>
        <span>Occupation:</span>
         <p>{occupation || occupation=== null? "none" : occupation}</p>
         </div>
       <div className={classes.row}>
        <span>Rating:</span>
         <p>{`${vip_score}%`}</p>
         </div>
        </div>
      );
    })}
</section>
</div>
</div>

</>
  )
}
export default Topranked