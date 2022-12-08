import React, { useRef } from "react";
import PropTypes from "prop-types";
import FormWrapper from "./form.styled";

const Form = ({ params }) => {
  const { setModal, setResponse, handleFetch, setSearchInputs } = params;

  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    let searchParams = {};

    // get submit button
    const submitBtn = form.current.querySelector("button");

    //get all input/textarea Wrappers
    const inputWrappers = [...form.current.querySelectorAll(".inputCon")];
    inputWrappers.forEach((wrapper) => {
      // get elements...
      const inputEl =
        wrapper.querySelector("input") || wrapper.querySelector("select");
      const errorEl = wrapper.querySelector(".errorMsg");

      if (inputEl.name === "Name") {
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
          searchParams = {
            ...searchParams,
            [inputEl.name.toLowerCase()]: inputEl.value
              .split(" ")
              .filter((text) => text !== Boolean)
              .join(" ")
          };
        }
      } else {
        // check for age
        if (inputEl.name === "Age" && inputEl.value) {
          searchParams = {
            ...searchParams,
            [inputEl.name.toLowerCase()]: JSON.parse(inputEl.value) || 0
          };
        }

        // others
        if (
          inputEl.value &&
          inputEl.value.length >= 3 &&
          inputEl.name !== "Age"
        ) {
          searchParams = {
            ...searchParams,
            [inputEl.name.toLowerCase()]: inputEl.value.trim()
          };
        }
      }

      return;
    });

    // console.log(names, optionalParams);

    if (valid) {
      setSearchInputs(searchParams);
      // console.log(searchParams);

      // disabe submit button
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
      submitBtn.textContent = "Please wait...";

      // api call
      const response = await handleFetch(searchParams);
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
      <div className="inputCon">
        <label htmlFor="name">Name</label>
        <input
          name="Name"
          id="name"
          placeholder="Enter Name here"
          type="text"
        />
        <small className="errorMsg"></small>
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
          <option selected disabled value="">
            Choose Gender
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
          placeholder="Enter occupation"
          type="text"
        />
        <small className="errorMsg"></small>
      </div>

      <div className="inputCon">
        <label htmlFor="age">Age</label>
        <input
          name="Age"
          id="age"
          placeholder="Enter your age e.g 67"
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
