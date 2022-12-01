import React, { useEffect, useState } from "react";

import styles from "./searchhistory.module.css";
import SearchIcon from "./assets/SearchIcon.svg";
import axios from "api/axios";
import { FilterBar } from "./FiltersBar";
import { TiArrowMaximiseOutline } from "react-icons/ti";

function SearchHistory() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   const setVips = async () => {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     setVips(response.data);
  //   };
  //   setVips();
  // }, []);

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  console.log("data", data);

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://jsonplaceholder.typicode.com/users?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className={styles.searchinput} onSubmit={handleSearch}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Search History"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className={styles.icon}>
          <button type="submit">
            <img src={SearchIcon} alt="Search" />
          </button>
        </span>
      </form>
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
            {data.length === 0 ? (
              <div>No data found</div>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SearchHistory;
