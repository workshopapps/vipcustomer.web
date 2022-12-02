import React, { useState } from "react";
import Form from "components/Demo/Form";
import axios from "api/axios";
import SingleSearchWrapper from "./singlesearche.styled";
import Modal from "components/Demo/Modal";

const SingleSearch = () => {
  // states for the Form component
  const [name, setName] = useState("");
  const [response, setResponse] = useState(undefined);
  const [searchInputs, setSearchInputs] = useState({});

  // states for the quick form input
  const [loading, setLoading] = useState(false);
  const [inputNames, setInutNames] = useState({
    firstName: "",
    lastName: ""
  });

  // state for modal
  const [modal, setModal] = useState(false);

  // handle fetch function
  const handleFetch = async (name, params = {}) => {
    // GET WITH AXIOS
    try {
      const response = await axios.get("/api/search/", {
        params: {
          name: name,
          ...params
        }
      });

      const result = response.data[0];
      return result;
    } catch (error) {
      return undefined;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const first = inputNames.firstName.trim();
    const last = inputNames.lastName.trim();

    if (first && last) {
      const name = `${first} ${last}`;
      setLoading(true);

      // api call
      const response = await handleFetch(name);
      setName(name);
      setResponse(response);
      setModal(true);

      // reset form values
      setInutNames({
        firstName: "",
        lastName: ""
      });
      setLoading(false);
    }
  };

  return (
    <>
      <SingleSearchWrapper>
        <section>
          <h2>Run a quick search</h2>
          <form onClick={handleSubmit} className="form2" action="">
            <div className="loading">
              <div className={loading ? "spinner" : "spinner stop"}></div>
              <p>Please wait</p>
            </div>

            <div className="form__wrapper">
              <input
                value={inputNames.firstName}
                onChange={(e) =>
                  setInutNames({ ...inputNames, firstName: e.target.value })
                }
                required
                placeholder="Enter first name"
                type="text"
              />

              <input
                value={inputNames.lastName}
                onChange={(e) =>
                  setInutNames({ ...inputNames, lastName: e.target.value })
                }
                required
                placeholder="Enter last name"
                type="text"
              />

              <button>Quick Search</button>
            </div>
          </form>
        </section>

        <section>
          <h2>Get a more accurate Result</h2>
          <div className="form">
            <Form
              params={{
                setModal,
                setName,
                setResponse,
                setSearchInputs,
                handleFetch
              }}
            />
          </div>
        </section>
      </SingleSearchWrapper>

      <Modal
        name={name}
        search={searchInputs}
        result={response}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
};

export default SingleSearch;
