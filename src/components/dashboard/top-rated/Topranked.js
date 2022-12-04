import React,{useState,useEffect,useContext} from 'react';
import classes from "./Topranked.module.css"


const Topranked = () =>{
  const [loading,setLoading] = useState(false);
  const [datas,setDatas] = useState(ranks);
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
if(loading)
  return(
    <h3>.Loading..</h3>
  )
  return (
    <>
        <section className={classes.container}>
        <div className={classes.tablet}>
          <div className={classes.tabletContainer} >
                <h3 className={classes.header}>Name</h3>
                <h3 className={classes.header}>Age</h3>
                <h3 className={classes.header}>Gender</h3>
                <h3 className={classes.header}>Occupation</h3>
                <h3 className={classes.header}>Rating</h3>
          </div>

          {datas.map((data, index) => {
            const { name, age, gender, occupation, vip_score} = data;
            return (
              <div key={index} className={classes.tabletContainer} >
                <p className={classes.text}>{name}</p>
                <p className={classes.text} >{age}</p>
                <p className={classes.text} >{gender}</p>
                <p className={classes.text} >{occupation}</p>
                <p className={classes.text} >{vip_score}</p>
              </div>
            );
          })}
      </div>
      </section>


    <div className={classes.mobile}>
     <section className={classes.mobileContainer}>
            {datas.map((data, index) => {
            const { name, age, gender, occupation, vip_score} = data;
            return (
              <div key={index} className={classes.mobileRow}>
             <div className={classes.row}>
              <span>Name:</span>
               <p>{name}</p>
               </div>
             <div className={classes.row}>
              <span>Age:</span>
               <p>{age}</p>
               </div>
             <div className={classes.row}>
              <span>Gender:</span>
               <p>{gender}</p>
               </div>
             <div className={classes.row}>
              <span>Occupation:</span>
               <p>{occupation}</p>
               </div>
             <div className={classes.row}>
              <span>Rating:</span>
               <p>{vip_score}</p>
               </div>
              </div>
            );
          })}
  </section>
   </div>
  </>
  )
}
export default Topranked