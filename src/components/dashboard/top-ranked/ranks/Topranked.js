import React,{useState,useEffect} from "react";
import classes from "./Topranked.module.css";
import Paginate from "../paginate/Paginate";
import Header from "../header/Header";
import Modal from "../modal/Modal";



const Topranked = () =>{
  const [datas,setDatas] = useState([]);
  const [error,setError] = useState(false)
  const [date, setDate] = useState("")
  const [currentPage,setCurrentPage] = useState(1)
  const [perPage] = useState(7)
  const [isChecked,setIsChecked]= useState({
    ascending:false,
    descending:false
  })
 
  const fetchRankData = (date ="",sort = false) =>{
   
   const user =  localStorage.getItem("user") 
   const users = JSON.parse(user)
     fetch(`https://api.starfinder.hng.tech/api/history/top-search?date_sort=${date}&ascending_sort=${sort}`,
     {headers:{
      Accept:"application/json",
      Authorization:`Bearer ${users.access_token}`
      }})
     .then((res)=> res.json())
     .then((data)=> setDatas(data))
     .catch((err)=>setError(true))

  }
  useEffect(()=>{
    fetchRankData()
  },[])

  const handleChange = (e) =>{
    const date = e.target.value;
    setDate(date)
    fetchRankData(date)
  }

const indexOfLastPage = currentPage * perPage;
const indexOfFirsPage = indexOfLastPage - perPage;
const currentPost = datas.slice(indexOfFirsPage,indexOfLastPage)

const ascendingHandleChange = (e) => {
  let value = e.target.checked

  setIsChecked(prev =>{
    return{
      ...prev,
      ascending:value,
      descending:false
    }
  })
  fetchRankData(date,value)
}
const descendingHandleChange = (e) => {
  let value = e.target.checked
  setIsChecked(prev =>{
    return {
      ...prev,
      ascending:false,
      descending:value
     
    }
  })
  fetchRankData(date,false)
 }

const paginate =(number) =>{
  setCurrentPage(number)
}

  return (
<div>
<Header isChecked={isChecked} handleChange={handleChange} ascendingHandleChange={ascendingHandleChange} descendingHandleChange={descendingHandleChange} />
{datas.length <=0 ? <Modal /> : 
 <div>
  <div className={classes.tablet}>
    <section className={classes.container}>
    <div className={classes.tabletContainer} >
        <h3 className={classes.header}>Timestamp</h3>
          <h3 className={classes.header}>Name</h3>
          <h3 className={classes.header}>Age</h3>
          <h3 className={classes.header}>Gender</h3>
          <h3 className={classes.header}>Occupation</h3>
          <h3 className={classes.header}>Rating</h3>
    </div>
    <div>
    {currentPost.map((data, index) => {
      const { name, age, gender, occupation, vip_score,timestamp} = data;
      return (
        <div key={index} className={classes.tabletContainer} >
           <p className={classes.text} >{!timestamp || timestamp === null? "None" : timestamp}</p>
          <p className={classes.text}>{name.slice(0,1).toUpperCase() + name.slice(1)}</p>
          <p className={classes.text} >{!age || age === null? "None" : age}</p>
          <p className={classes.text} >{!gender || gender === null? "None" : gender.slice(0,1).toUpperCase() + gender.slice(1)}</p>
          <p className={classes.text} >{!occupation || occupation=== null? "None" : occupation}</p>
          <p className={classes.text} >{`${vip_score}%`}</p>
        </div>
      );
    })}
    </div>
  </section>
</div>
<div className={classes.mobile}>
<section className={classes.mobileContainer}>
{currentPost.map((data, index) => {
      const { name, age, gender, occupation, vip_score,timestamp} = data;
      return (
        <div key={index} className={classes.mobileRow}>
         <div className={classes.row}>
        <span>Timestamp:</span>
         <p>{!timestamp || timestamp === null? "None" : timestamp}</p>
         </div>
        <div className={classes.row}>
        <span>Name:</span>
         <p>{name.slice(0,1).toUpperCase() + name.slice(1)}</p>
         </div>
       <div className={classes.row}>
        <span>Age:</span>
         <p>{!age || age === null? "None" : age}</p>
         </div>
       <div className={classes.row}>
        <span>Gender:</span>
         <p>{!gender || gender === null? "None" : gender.slice(0,1).toUpperCase() + gender.slice(1)}</p>
         </div>
       <div className={classes.row}>
        <span>Occupation:</span>
         <p>{!occupation || occupation=== null? "None" : occupation}</p>
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
}
<Paginate postPerPage={perPage} totalPost={datas.length} paginate={paginate} />
 </div>
  )
}
export default Topranked