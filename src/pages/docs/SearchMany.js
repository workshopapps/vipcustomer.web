import React from "react";

const Docs = () => {
  return (
    <div className="documents-div">
      <h1>This is the search many page.</h1>
      <h3>Search many in the starFinder app for VIPs</h3>
      <p>
        By using this tool, we navigate using search-many bar, the name(s) of the VIP being searched for should be typed in the the search bar, and it/they should pop up for use.
      </p>
      <p>
        To have a succesfull search-many response, the following parameters must be inputed: name of person(s), gender, occupation(s), age(s), email address(es).
      </p>
    <iframe 
      src="https://www.thiscodeworks.com/embed/638b4cf2f3febd0015d3b6af" 
      style={{ width: '100%', height: '255px' }} 
      frameBorder="0">
    </iframe>
    <p>NOTE: An optional API key, should be passed to the request header to attribute the search request to a user. </p>
  </div>
  );
};

export default Docs;
