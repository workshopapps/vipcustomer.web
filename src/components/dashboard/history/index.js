import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Text, HeaderText } from "components/dashboard/search/components/results/components/Text";
import ResultsNavBar from "components/dashboard/search/components/results/components/ResultsNavBar";
import Column from "components/dashboard/search/components/results/components/Column";
// import { _vip } from "./data"; //tetst data
import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Axios from "api/axios";
import "components/dashboard/history/History.css";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import {
  ResultsWrapper,
  Tablet,
  Mobile,
  MobileWrapper,
  MobileRow,
  TabletRow
} from "components/dashboard/search/components/results/result.Styled";


// app
const Result = ({ vip = [] }) => {

  const [list, setList] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    size: 10,
    total: 0
  })

  const user = JSON.parse(localStorage.getItem('user'))


  const ResultsRef = useRef(null);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [vipList, setVipList] = useState(paginateFn(vip, 9).items);

  // paginate function... returns a slice of the whole array
  function paginateFn(array = [], itemsPerPage, currentPage = 0) {
    if (!itemsPerPage) throw new Error("check parameters at paginateFn");

    let pageNumber = Math.ceil(array.length / itemsPerPage);
    let startIndex = currentPage * itemsPerPage;
    let stopIndex = startIndex + itemsPerPage;
    let items = array.slice(startIndex, stopIndex);
    const buttonArray = Array.from({ length: pageNumber }, (v, i) => {
      return i;
    });
    return {
      items,
      buttonArray
    };
  }

  // handle paginate .... changes the page content
  const handlePaginate = (val) => {
    const newList = paginateFn(vip, 9, val).items;
    setVipList(newList);
    setCurrentBtn(val);
    window.scrollTo(0, Number(ResultsRef.current.offsetTop));
  };

  const getHistory = async function(){
    const result = await Axios.get(`/api/history?page=${pageInfo.page}&size=${pageInfo.size}`, { headers: {'Authorization': `Bearer ${user.access_token}` } })
    setList(result.data.items) 
    setPageInfo({
      page: result.data.page,
      total: result.data.total,
      size: result.data.size
    })
  }


  const handleDelete = (history_id) => {
     Axios.delete(`/api/history/${history_id}`, { headers: {'Authorization': `Bearer ${user.access_token}` } })
     .then(data => {
      setList((list) => list.filter(history => history.history_id !== history_id) );
     })
     .catch(error => console.log(error) 
     )
    // console.log(history_id);

    // setList((list) => list.filter(history => history.history_id !== history_id) );
  };
  
  const handleDeleteAll = () => {
    Axios.delete(`/api/history/delete/all`, { headers: {'Authorization': `Bearer ${user.access_token}` } })
     .then(data => {
      setList([]);
     })
     .catch(error => console.log(error) 
     )
  }


  useEffect(function mount() {
        getHistory()
       return function unMount() { }
  }, [pageInfo.page]) 
  console.log(list)


  
  // app
  return (
    <>
      <h1 className='history-index'>Search Histroy</h1>
      {/* The results container or wrapper */}
      <ResultsWrapper ref={ResultsRef}>
        <Tablet>
          <section className="wrapper__container">
            <ResultsNavBar />
            <button onClick={() => handleDeleteAll()} className="history_btn history_btn_danger history_btn_top">Delete All</button>
            <TabletRow>
            <HeaderText text="Time" />
              <HeaderText text="Name Query" />
              <HeaderText text="Gender Query" />
              <HeaderText text="Age Query" />
              <HeaderText text="Function" />
            </TabletRow>           

            {list.map((res, index) => {
              const { result, search_input, history_id} = res;


              return (
                <TabletRow key={index}>
                  <Datetime />
                  <Text text={search_input.name}/>
                  <Text text={search_input.gender ? search_input.gender : "-"} />
                  <Text text={search_input.age ? search_input.age : "-" } />
                  <div>
                    <button className="history_btn history_btn_primary">View</button>
                    <button onClick={() => handleDelete(history_id)} className="history_btn history_btn_danger">Delete</button>
                  </div>
                </TabletRow>
              );
            })}
          </section>
        </Tablet>

        <Mobile>
          <ResultsNavBar />

          <MobileWrapper>
            {list&&list.map((vip, index) => {
              // const { name, is_vip, vip_score, gender, age } = vip;

              return (
                <h1 key={index}>hello</h1>
                // <h1 key={index}>{vip.name}</h1>
                // <MobileRow key={index}>
                //   <Column name="Name" value={name} />
                //   <Column
                //     name="VIP?"
                //     value={is_vip ? <BsCheckLg /> : <FaTimes />}
                //   />
                //   <Column name="Score" value={vip_score} />
                //   <Column name="Gender" value={gender} />
                //   <Column name="Age" value={age} />
                // </MobileRow>
              );
            })}
          </MobileWrapper>
        </Mobile>
      </ResultsWrapper>

      
    </>
  );
};

Result.propTypes = {
  // responseData: PropTypes.object.isRequired
  // array needed... currently api returns an empty object
  vip: PropTypes.array
};

export default Result;