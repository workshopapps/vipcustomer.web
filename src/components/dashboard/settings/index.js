// please export your page here
// please export your page here
import React, { useState } from "react";
import Input from "./Input";
import styles from "./index.module.css";

const index = () => {
  const [fname, setFname] = useState("rika");
  const [lname, setLname] = useState("timmy");
  const [email, setEmail] = useState("axe.business@gmail.com");
  const [address, setAddress] = useState("33062 Zboncak isle");
  const [number, setNumber] = useState("+23458673540");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { fname, lname, email, address, number };
    console.log(newUser);
  };

  return (
    <div>
      <div className={styles.settings__header}>
        <div>
          <h1>Settings</h1>
        </div>
        <div className={styles.settings__img}>sa</div>
      </div>
      <div className={styles.settings__details}>
        <form onSubmit={handleSubmit}>
          <div className={styles.settings__names}>
            <Input
              label="first name"
              id="fname"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
            <Input
              label="last name"
              id="lname"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
          <Input
            label="company email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            label="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            label="contact number"
            id="number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button type="submit" className={styles.submitBtn}>
            Change my details
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
