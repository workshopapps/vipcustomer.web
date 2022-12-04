import React from "react";

const Docs = () => {
  return (
    <div className="documents-div">
    <h1>History page</h1>
    <h3>History served</h3>
    <p>
      History gives the user the ability to review previous searches, especially to retrieve the information of a particular VIP or group of VIPs...
    </p>

    <p>
      To get these informations, navigate to the History page and click on the information you need.
    </p>
    <p>
      The code snippets below gives show a succesful response from the Starfinder.
    </p>
    <iframe 
      src="https://www.thiscodeworks.com/embed/638b5e44f3febd0015d3b6b5" 
      style={{ width: '100%', height: '320px' }} 
      frameBorder="0">

    </iframe>
    <p>
      This endpoint returns the list of search requets done by a specigfic user. It takes in bearer authorization token provided after a successfull login request. the authorization tolken is then passed to the get history request header.
    </p>

     </div>
  );
};

export default Docs;
