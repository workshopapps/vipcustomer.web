import React, { useEffect, useState } from "react";

import styles from "./searchhistory.module.css";
import SearchIcon from "./assets/SearchIcon.svg";
import axios from "api/axios";
import { FilterBar } from "./FiltersBar";
import { TiArrowMaximiseOutline } from "react-icons/ti";

function SearchHistory() {
  const [vips, setVips] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const setVips = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setVips(response.data);
    };
    setVips();
  }, []);

  return (
    <>
      <div className={styles.searchinput}>
        <input type="text" name="name" id="name" placeholder="Search History" />
        <span className={styles.icon}>
          <img src={SearchIcon} alt="Search" />
        </span>
      </div>
      <div>
        <div className={styles.tablediv}>
          <h2>Today- Thursday, November 30th, 2022</h2>
          <FilterBar />
        </div>

        <table id={styles["vips"]}>
          <tbody>
            <tr>
              <th>Time</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Career</th>
              <th>VIP Rating</th>
            </tr>
            <tr>
              <td>2:15pm</td>
              <td>Mark Essien</td>
              <td>Male</td>
              <td>40 years</td>
              <td>Tech guru</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>2:15pm</td>
              <td>Mark Zukerberg</td>
              <td>Male</td>
              <td>40 years</td>
              <td>Tech guru</td>
              <td>70%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SearchHistory;
