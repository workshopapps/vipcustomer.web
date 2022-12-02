import React, { useRef } from "react";
import PropTypes from "prop-types";
import FormWrapper from "./form.styled";

const Form = ({ params }) => {
  const { setModal, setResponse, setName, handleFetch, setSearchInputs } =
    params;

  const form = useRef(null);

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
            [inputEl.name]: inputEl.value.trim()
          };
        }
      } else {
        if (inputEl.value && inputEl.value.length >= 3) {
          optionalParams = {
            ...optionalParams,
            [inputEl.name.toLowerCase()]: inputEl.value.trim()
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
      submitBtn.textContent = "analyze";

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
    <FormWrapper ref={form} onSubmit={handleSubmit} className=" mt2">
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
        Analyze
      </button>
    </FormWrapper>
  );
};

Form.propTypes = {
  params: PropTypes.object
};

export default Form;
