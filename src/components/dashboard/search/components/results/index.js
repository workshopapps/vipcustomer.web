import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Text, HeaderText } from "./components/Text";
import ResultsNavBar from "./components/ResultsNavBar";
import Column from "./components/Column";
import Paginate from "./components/Paginate";
import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import {
  ResultsWrapper,
  Tablet,
  Mobile,
  MobileWrapper,
  MobileRow,
  TabletRow
} from "./result.Styled";

// app
const Result = ({ vip = [] }) => {
  const ResultsRef = useRef(null);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [vipList, setVipList] = useState(paginateFn(vip, 9).items);
  const [filteredList] = useState(vipList)
  const [filterSelected, setFilterSelected] = useState("");
  const [sortSelected, setSortSelected] = useState("");


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
//  filter selection
  const filterHandle = (text) => {
    setFilterSelected(text);
   if(text === "Gold vip"){
     const filtered = filteredList.filter(vip => vip.vip_score >= 75)
    setVipList(filtered)
   }else if(text==="Silver vip"){
    const filtered = filteredList.filter(vip => vip.vip_score >= 70)
    setVipList(filtered)
   }else{
    const filtered = filteredList.filter(vip => vip.vip_score >= 60)
   
    setVipList(filtered)
   }
  };
// sort selection
const sortHandle = (text) => {
  setSortSelected(text);

};
  // handle paginate .... changes the page content
  const handlePaginate = (val) => {
    const newList = paginateFn(vip, 9, val).items;
    setVipList(newList);
    setCurrentBtn(val);
    window.scrollTo(0, Number(ResultsRef.current.offsetTop));
  };


  // app
  return (
    <>
      {/* The results container or wrapper */}
      <ResultsWrapper ref={ResultsRef}>
        <Tablet>
          <section className="wrapper__container">
            <ResultsNavBar filterHandle={filterHandle} sortHandle={sortHandle} sortSelected={sortSelected} filterSelected={filterSelected} />
            <TabletRow>
              <HeaderText text="Name" />
              <HeaderText text="VIP?" />
              <HeaderText text="Score" />
              <HeaderText text="Gender" />
              <HeaderText text="Age" />
              <HeaderText text="Category" />
            </TabletRow>
            {vipList.map((vip, index) => {
              const { name, vip_score, is_vip, gender, age } = vip;
              return (
                <TabletRow key={index}>
                  <Text text={name.slice(0,1).toUpperCase() + name.slice(1)} />
                  <Text text={is_vip ? <BsCheckLg /> : <FaTimes />} />
                  <Text text={Math.ceil(vip_score)} />
                  <Text text={gender.slice(0,1).toUpperCase() + gender.slice(1) } />
                  <Text text={age} />
                  <Text text={age} />
                </TabletRow>
              );
            })}
          </section>
        </Tablet>

        <Mobile>
          <ResultsNavBar  filterHandle={filterHandle} sortHandle={sortHandle} sortSelected={sortSelected} filterSelected={filterSelected} />

          <MobileWrapper>
            {vipList.map((vip, index) => {
              const { name, is_vip, vip_score, gender, age } = vip;
    
              return (
                <MobileRow key={index}>
                  <Column name="Name" value={name.slice(0,1).toUpperCase() + name.slice(1)} />
                  <Column
                    name="VIP?"
                    value={is_vip ? <BsCheckLg /> : <FaTimes />}
                  />
                  <Column name="Score" value={Math.ceil(vip_score)} />
                  <Column name="Gender" value={gender.slice(0,1).toUpperCase() + gender.slice(1)} />
                  <Column name="Age" value={age} />
                  <Column name="Category" value={vip_score} />
                </MobileRow>
              );
            })}
          </MobileWrapper>
        </Mobile>
      </ResultsWrapper>

      {/* The paginate buttons */}
      <Paginate
        paginateFn={paginateFn}
        itemsPerPage={9}
        array={vip}
        currentBtn={currentBtn}
        handlePaginate={handlePaginate}
      />
    </>
  );
};

Result.propTypes = {
  // responseData: PropTypes.object.isRequired
  // array needed... currently api returns an empty object
  vip: PropTypes.array
};

export default Result;
