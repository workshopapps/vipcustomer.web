import React, { useState } from "react";
import Form from "components/Demo/Form";
import axios from "api/axios";
import SingleSearchWrapper from "./singlesearche.styled";
import Modal from "components/Demo/Modal";
import Loading from "../loading";

const SingleSearch = () => {
  // states for the Form component
  const [response, setResponse] = useState(undefined);
  const [searchInputs, setSearchInputs] = useState({});

  // states for the quick form input
  const [loading, setLoading] = useState(false);
  const [inputName, setInputName] = useState("");

  // state for modal
  const [modal, setModal] = useState(false);

  // handle fetch function
  const handleFetch = async (params = {}) => {
    // GET WITH AXIOS
    try {
      const response = await axios.get("/api/search/", {
        params: {
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

    const name = inputName
      .split(" ")
      .filter((text) => text !== Boolean)
      .join(" ");

    if (name) {
      setSearchInputs({
        name
      });
      setLoading(true);

      // api call
      const response = await handleFetch(searchInputs);

      setResponse(response);
      setModal(true);

      // reset form values
      setInputName("");
      setLoading(false);
    }
  };

  return (
    <>
      <SingleSearchWrapper>
        <section>
          <h2>Run a quick search</h2>
          <form onSubmit={handleSubmit} className="quick__form">
            <Loading loading={loading} />

            <div className="form__wrapper">
              <input
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                required
                placeholder="Enter Name"
                type="text"
              />

              <button>Quick Search</button>
            </div>
          </form>
        </section>

        <section>
          <h2>Get a more accurate Result</h2>
          <div className="detailed__form">
            <Form
              params={{
                setModal,
                setResponse,
                setSearchInputs,
                handleFetch
              }}
            />
          </div>
        </section>
      </SingleSearchWrapper>

      <Modal
        search={searchInputs}
        result={response}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
};

export default SingleSearch;
