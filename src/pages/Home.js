import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store/contexts/AppContext";
import { sayHello_a } from "../store/actions/appActions";

const Home = () => {
  const { greet, dispatch, changeTheme, theme } = Store();

  useEffect(() => {
    sayHello_a(dispatch);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h1>{greet}</h1>

      <button className="btn" onClick={changeTheme}>
        change theme
      </button>

      <span>&nbsp;</span>

      <Link className="btn" to="/example">
        Example page
      </Link>

      <h4 style={{ marginTop: "30px" }}>Theme is {theme ? "light" : "dark"}</h4>

      <div>
        <br />
        <h3>Other Links</h3>
        <Link className="btn" to="/dashboard">
          Dashboard
        </Link>
        <Link className="btn" to="/docs">
          Docs
        </Link>
        <Link className="btn" to="/docs/usage">
          Usage
        </Link>
        <Link className="btn" to="/docs/somethingelse">
          Something Else
        </Link>
      </div>
    </div>
  );
};

export default Home;
