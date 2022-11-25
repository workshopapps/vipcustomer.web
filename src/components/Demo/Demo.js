import React, { useState, useRef } from "react";
import axios from "api/axios";
import checkmark from "./assets/checkmark.png";
import { Footer, Navbar } from "components/general";
import { DemoWrapper, Header, Body } from "./demo.styled";
import Modal from "./Modal";

const Demo = () => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [response, setResponse] = useState(undefined);
  const [searchInputs, setSearchInputs] = useState({});
  const [modal, setModal] = useState(false);

  const handleFetch = async (name, params) => {
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
    let valid = true;
    let names = {};
    let optionalParams = {};

    // get submit button
    const submitBtn = form.current.querySelector("button");

    //get all input/textarea Wrappers
    const inputWrappers = [...form.current.querySelectorAll(".inputCon")];
    inputWrappers.forEach((wrapper) => {
      // get elements...
      const inputEl =
        wrapper.querySelector("input") || wrapper.querySelector("select");
      const errorEl = wrapper.querySelector(".errorMsg");

      if (inputEl.name === "First name" || inputEl.name === "Last name") {
        if (!inputEl.value) {
          errorEl.textContent = `${inputEl.name} field cannot be empty`;
          inputEl.classList.add("error");
          valid = false;
        }

        if (inputEl.value && inputEl.value.length < 3) {
          errorEl.textContent = `${inputEl.name} field cannot be less than three chracters`;
          inputEl.classList.add("error");
          valid = false;
        }

        if (inputEl.value && inputEl.value.length >= 3) {
          errorEl.textContent = "";
          inputEl.classList.remove("error");
          names = {
            ...names,
            [inputEl.name]: inputEl.value
          };
        }
      } else {
        if (inputEl.value && inputEl.value.length >= 3) {
          optionalParams = {
            ...optionalParams,
            [inputEl.name.toLowerCase()]: inputEl.value
          };
        }
      }

      return;
    });

    // console.log(names, optionalParams);

    if (valid) {
      let inputName = names["First name"] + " " + names["Last name"];
      setName(inputName);
      setSearchInputs(optionalParams);

      // disabe submit button
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
      submitBtn.textContent = "Please wait...";

      // api call
      const response = await handleFetch(inputName, optionalParams);
      setResponse(response);
      setModal(true);

      // reset buttons
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";

      // reset all input fields
      inputWrappers.forEach((wrapper) => {
        // get elements...
        const inputEl =
          wrapper.querySelector("input") || wrapper.querySelector("select");
        inputEl.value = "";
      });
    }
  };

  return (
    <>
      <Navbar />
      <DemoWrapper>
        <Header>
          <h1>
            Live Demo of <strong> Axe API VIP </strong> recognition software
          </h1>
        </Header>

        <Body>
          <article className="text__wrapper">
            <h2 className="header mt2">
              See why companies trust AXE API to identify high profile
              personalities, gain their loyalty, and encourage customer
              retention.
            </h2>

            <p className="sub__text mt2">
              Try out Axe API with any VIP’s information and see how it performs{" "}
            </p>

            <ul className="mt2">
              <li>
                <img src={checkmark} />
                Automatic VIP level tagging and categorization with relevant
                keyword extraction
              </li>
              <li>
                <img src={checkmark} />
                Real-time data collection so that you can make decisions on how
                to improve high ranking customer satisfaction levels.
              </li>
              <li>
                <img src={checkmark} />
                Automatic customer profiling methods and processes so teams can
                focus on what matters the most
              </li>
            </ul>
          </article>

          <article className="form__wrapper">
            <h2>Try Out A Live Demo</h2>

            <p className="mt2">
              Fill in the information below with a VIP’s details and hit analyze
              to identify Vips
            </p>

            <form ref={form} onSubmit={handleSubmit} className=" mt2">
              <div className="wrapInput">
                <div className="inputCon">
                  <label htmlFor="first_name">First name</label>
                  <input
                    name="First name"
                    id="first_name"
                    placeholder="Enter your first name"
                    type="text"
                  />
                  <small className="errorMsg"></small>
                </div>

                <div className="inputCon">
                  <label htmlFor="last_name">Last name</label>
                  <input
                    name="Last name"
                    id="last_name"
                    placeholder="Enter your last name"
                    type="text"
                  />
                  <small className="errorMsg"></small>
                </div>
              </div>

              <div className="inputCon green">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="yourname@email.com"
                  id="email"
                />
                <small className="errorMsg"></small>
              </div>

              <div className="inputCon green">
                <label htmlFor="gender">Gender</label>
                <select name="Gender" id="gender">
                  <option disabled value="select">
                    Select
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <small className="errorMsg"></small>
              </div>

              <div className="inputCon">
                <label htmlFor="occupation">Occupation</label>
                <input
                  name="Occupation"
                  id="occupation"
                  placeholder="Enter your occupation"
                  type="text"
                />
                <small className="errorMsg"></small>
              </div>

              <div className="inputCon">
                <label htmlFor="age">Age</label>
                <input
                  name="Age"
                  id="age"
                  placeholder="Enter your age eg 67"
                  type="number"
                />
                <small className="errorMsg"></small>
              </div>

              <button type="submit" className="mt25" id="btn__submit">
                Annalyze
              </button>
            </form>
          </article>
        </Body>
      </DemoWrapper>

      <Modal
        name={name}
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
