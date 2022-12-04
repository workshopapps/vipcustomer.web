import React from "react";
import {Link} from 'react-router-dom';
import "./style.css"

const Docs = () => {
  return (
    <div className="documents-div">
      <h1>Usage</h1>
      <h3>
        Find your target VIP.
      </h3>
      <p>
          Some good reasons to make use of Starfinder:
          <li>Why Starfinder</li>
          <li>Things to achieve using Starfinder</li>
          <li>How to use Starfinder</li>
          <li>And many more...</li>
      </p>
      <h3>Why Starfinder</h3>
      <p>
        Starfinder can be used for many different reasons,
        <li>To have a target audience</li>
        <li>To identify people of influence who can be reached out to</li>
        <li>Above all, to open and close more sales</li>
      </p>
      <h3>Things to achieve using Starfinder</h3>
      <p>
        Surely, there is a lot to gain from using Starfinder. 
        <li>Increased sales</li>
        <li>Companys exposure</li>
        <li>More popularity</li>
        <li></li>
      </p>
      <h3>How to use startfinder</h3>
      <p>
          To generate a vip identification, you must have succesfully signed up or loged in (check <Link to='/documents/search' style={{ color: 'red' }}>search</Link> for more details on loging in and signing up).<br /> Then, you need to search for the target vip by adding the neccesary parameters. After that has been done, click on the enter key or tap the search icon and youre good to go. 
        </p>
    </div>   
  );
};

export default Docs;
