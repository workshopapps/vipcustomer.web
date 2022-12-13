import React from "react";
import "../components/document.css";

const Search = () => {
  return (
    <div className="documents-div">
      <h1>Search</h1>
      <h3>Searching starFinder app for VIPs</h3>
      <p>
        By using the app, we navigate using search bar, the name of the VIP
        being searched for should be typed in the the search bar, and it should
        pop up for use.
      </p>
      <p>
        To have a succesfull search response, the following parameter MUST be
        inputed: name of person. Other parameters includes gender, occupation,
        age, email address.
      </p>

      <iframe
        src="https://www.thiscodeworks.com/embed/638b49faf3febd0015d3b6ae"
        style={{ width: "100%", height: "268px" }}
        frameBorder="0"></iframe>

      <p>
        NOTE: An optional api key, should be passed to the request header to
        attribute the search request to a user.{" "}
      </p>
      <p></p>
    </div>
  );
};

export default Search;
