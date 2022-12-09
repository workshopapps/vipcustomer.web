import React, { useState } from "react";
import axios from "api/axios";
import checkmark from "./assets/checkmark.png";
import { Footer, Navbar } from "components/general";
import { DemoWrapper, Header, Body } from "./demo.styled";
import Modal from "./Modal";
import Form from "./Form";

const Demo = () => {
  const [modal, setModal] = useState(false);
  const [response, setResponse] = useState(undefined);
  const [searchInputs, setSearchInputs] = useState({});

  const handleFetch = async (name, params) => {
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

  return (
    <>
      <Navbar />
      <DemoWrapper>
        <Header>
          <h1>
            Live Demo of <strong> Star Finder VIP </strong> recognition
            software.
          </h1>
        </Header>

        <Body>
          <article className="text__wrapper">
            <h2 className="header mt2">
              See why companies trust Star Finder to identify high profile
              personalities, gain their loyalty, and encourage customer
              retention.
            </h2>

            <p className="sub__text mt2">
              Try out Star Finder with any VIP’s information and see how it
              performs.
            </p>

            <ul className="mt2">
              <li>
                <img src={checkmark} />
                Automatic VIP level tagging and categorization with relevant
                keyword extraction.
              </li>
              <li>
                <img src={checkmark} />
                Real-time data collection so that you can make decisions on how
                to improve high ranking customer satisfaction levels.
              </li>
              <li>
                <img src={checkmark} />
                Automatic customer profiling methods and processes so teams can
                focus on what matters the most.
              </li>
            </ul>
          </article>

          <article className="form__wrapper">
            <h2>Try Out A Live Demo.</h2>

            <p className="mt2">
              Fill in the information below with a VIP’s details and hit analyze
              to identify {"VIP's"}.
            </p>

            <Form
              params={{
                setSearchInputs,
                handleFetch,
                setResponse,
                setModal
              }}
            />
          </article>
        </Body>
      </DemoWrapper>

      <Modal
        search={searchInputs}
        result={response}
        modal={modal}
        setModal={setModal}
      />
      <Footer />
    </>
  );
};
export default Demo;
