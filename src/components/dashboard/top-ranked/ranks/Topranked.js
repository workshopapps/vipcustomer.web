import React, { useState, useEffect } from "react";
import { AuthStore } from "store/contexts/AuthContext";
import classes from "./Topranked.module.css";
import Paginate from "../paginate/Paginate";
import Header from "../header/Header";
import Modal from "../modal/Modal";
import Error from "../util/Error";

const Topranked = () => {
  const { _axios, user, headers } = AuthStore();

  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(false);
  const [date, setDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);
  const [isChecked, setIsChecked] = useState({
    ascending: false,
    descending: false
  });

  const fetchRankData = (date = " ", sort = false) => {
    if (!headers) return;
    _axios
      .get("/api/history/top-search", {
        params: {
          date: date,
          sort: sort
        }
      })
      .then((res) => {
        setDatas(res.data);
        // console.log(res);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setDatas([]);
      });
  };

  useEffect(() => {
    fetchRankData();
  }, [user, headers]);

  const handleChange = (e) => {
    const date = e.target.value;
    setDate(date);
    fetchRankData(date);
  };

  const indexOfLastPage = currentPage * perPage;
  const indexOfFirsPage = indexOfLastPage - perPage;
  const currentPost = Array.isArray(datas)
    ? datas.slice(indexOfFirsPage, indexOfLastPage)
    : [];

  const ascendingHandleChange = (e) => {
    let value = e.target.checked;
    setIsChecked((prev) => {
      return {
        ...prev,
        ascending: value,
        descending: false
      };
    });

    fetchRankData("", true);
  };

  const descendingHandleChange = (e) => {
    let value = e.target.checked;
    setIsChecked((prev) => {
      return {
        ...prev,
        ascending: false,
        descending: value
      };
    });
    fetchRankData(date, false);
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      {error ? (
        <Error fetchRankData={fetchRankData} />
      ) : (
        <div>
          <div>
            <Header
              isChecked={isChecked}
              handleChange={handleChange}
              ascendingHandleChange={ascendingHandleChange}
              descendingHandleChange={descendingHandleChange}
            />
            {currentPost.length <= 0 ? (
              <Modal />
            ) : (
              <div>
                <div className={classes.tablet}>
                  <section className={classes.container}>
                    <div className={classes.tabletContainer}>
                      <h3 className={classes.header}>Timestamp</h3>
                      <h3 className={classes.header}>Name</h3>
                      <h3 className={classes.header}>Age</h3>
                      <h3 className={classes.header}>Gender</h3>
                      <h3 className={classes.header}>Rating</h3>
                    </div>
                    <div>
                      {currentPost.map((data, index) => {
                        const { name, age, gender, vip_score, timestamp } =
                          data;
                        return (
                          <div key={index} className={classes.tabletContainer}>
                            <p className={classes.text}>
                              {!timestamp || timestamp === null
                                ? "None"
                                : timestamp}
                            </p>
                            <p className={classes.text}>
                              {name.slice(0, 1).toUpperCase() + name.slice(1)}
                            </p>
                            <p className={classes.text}>
                              {!age || age === null ? "None" : age}
                            </p>
                            <p className={classes.text}>
                              {!gender || gender === null
                                ? "None"
                                : gender.slice(0, 1).toUpperCase() +
                                  gender.slice(1)}
                            </p>
                            <p className={classes.text}>{`${vip_score}%`}</p>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </div>
                <div className={classes.mobile}>
                  <section className={classes.mobileContainer}>
                    {currentPost.map((data, index) => {
                      const { name, age, gender, vip_score, timestamp } = data;
                      return (
                        <div key={index} className={classes.mobileRow}>
                          <div className={classes.row}>
                            <span>Timestamp:</span>
                            <p>
                              {!timestamp || timestamp === null
                                ? "None"
                                : timestamp}
                            </p>
                          </div>
                          <div className={classes.row}>
                            <span>Name:</span>
                            <p>
                              {name.slice(0, 1).toUpperCase() + name.slice(1)}
                            </p>
                          </div>
                          <div className={classes.row}>
                            <span>Age:</span>
                            <p>{!age || age === null ? "None" : age}</p>
                          </div>
                          <div className={classes.row}>
                            <span>Gender:</span>
                            <p>
                              {!gender || gender === null
                                ? "None"
                                : gender.slice(0, 1).toUpperCase() +
                                  gender.slice(1)}
                            </p>
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
            )}
            <Paginate
              postPerPage={perPage}
              currentPage={currentPage}
              totalPost={datas.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Topranked;
