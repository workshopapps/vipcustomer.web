import React from "react";
import styles from "./Profile.module.css";
import Profile_pic from "./images/profile_pic.png";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <nav></nav>
      <main>
        <div className={styles.top}>
          <figure className={styles.pic}>
            <img src={Profile_pic} alt="profile_pic" />
          </figure>
          <div className={styles.first}>
            <h3>Rikah Timmy</h3>
            <p>Project Manager</p>
            <p>ACTIVE</p>
          </div>
          <div className={styles.second}>ADMIN</div>
          <div className={styles.third}>
            <h3>Company</h3>
            <p>Peagus Airline</p>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.left}>
            <div className={styles.up}>
              <h3>Profile Details</h3>
              <div>
                <h4>Email</h4>
                <p>rikahtimmy@gmail.com</p>
              </div>
              <div>
                <h4>Time Spent</h4>
                <p>10hrs:20min:30secs</p>
              </div>
              <div>
                <h4>Total CSV Upload</h4>
                <p>7</p>
              </div>
            </div>
            <div className={styles.down}>
              <h4>User Activities</h4>
              <div>
                <p>All</p>
                <p>Login History</p>
                <p>Processes</p>
              </div>
              <div>
                <img src="" alt="icon" />
                <div>
                  <p>
                    <p>Running</p>
                    <p>Newsletter</p>
                  </p>
                  <p>16 November 2022 at 12:00</p>
                </div>
              </div>
              <div>
                <img src="" alt="icon" />
                <div>
                  <p>
                    <p>Running</p>
                    <p>Newsletter</p>
                  </p>
                  <p>16 November 2022 at 12:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
