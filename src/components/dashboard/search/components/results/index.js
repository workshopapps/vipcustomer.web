import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Text, HeaderText } from "./components/Text";
import ResultsNavBar from "./components/ResultsNavBar";
import Column from "./components/Column";
import Paginate from "./components/Paginate";
import { _vip } from "./data";
import {
  ResultsWrapper,
  Tablet,
  Mobile,
  MobileWrapper,
  MobileRow,
  TabletRow
} from "./result.Styled";

// app
const Result = ({ responseData = [] }) => {
  console.log(responseData);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [vipList, setVipList] = useState(paginateFn(_vip, 9).items);

  // paginate function... returns a slice of the whole array
  function paginateFn(array = [], itemsPerPage, currentPage = 0) {
    if (!itemsPerPage) throw new Error("check parameters at paginateFn");

    array = array.map((arr, index) => {
      if (typeof arr == "object" && !Array.isArray(arr)) {
        return {
          ...arr,
          no: index + 1
        };
      } else {
        return arr;
      }
    });

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
    const newList = paginateFn(_vip, 9, val).items;
    setVipList(newList);
    setCurrentBtn(val);
    window.scrollTo(0, 0);
  };

  // effect updates the state in case of changes
  // useEffect(() => {
  //   setVipList(paginateFn(_vip, 9).items);
  // }, [responseData]);

  // app
  return (
    <>
      {/* The results container or wrapper */}
      <ResultsWrapper>
        <Tablet>
          <section className="wrapper__container">
            <ResultsNavBar />
            <TabletRow>
              <HeaderText text="Name" />
              <HeaderText text="Category" />
              <HeaderText text="Gender" />
              <HeaderText text="Networth" />
              <HeaderText text="Career" />
            </TabletRow>

            {vipList.map((vip, index) => {
              const { name, category, gender, career, no } = vip;
              return (
                <TabletRow key={index}>
                  <Text text={name} />
                  <Text text={category} />
                  <Text text={gender} />
                  <Text text={no + "b$"} />
                  <Text text={career} />
                </TabletRow>
              );
            })}
          </section>
        </Tablet>

        <Mobile>
          <ResultsNavBar />

          <MobileWrapper>
            {vipList.map((vip, index) => {
              const { name, category, gender, netWorth, career } = vip;

              return (
                <MobileRow key={index}>
                  <Column name="Name" value={name} />
                  <Column name="Category" value={category} />
                  <Column name="Gender" value={gender} />
                  <Column name="Networth" value={netWorth} />
                  <Column name="Career" value={career} />
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
        array={_vip}
        currentBtn={currentBtn}
        handlePaginate={handlePaginate}
      />
    </>
  );
};

Result.propTypes = {
  // responseData: PropTypes.object.isRequired
  // array needed... currently api returns an empty object
  responseData: PropTypes.array.isRequired
};

export default Result;
