import React, { useRef } from "react";
import PropTypes from "prop-types";
import FormWrapper from "./form.styled";

const Form = (props) => {
  const { setEntryList, entryList, storeList } = props;
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let names = {};
    let optionalParams = {};

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
      let name = names["First name"] + " " + names["Last name"];

      const formValue = {
        name,
        id: new Date().getTime(),
        ...optionalParams
      };

      const newList = [...entryList, formValue];
      setEntryList(newList);
      storeList(newList);

      // reset all input fields
      inputWrappers.forEach((wrapper) => {
        // get elements...
        const inputEl =
          wrapper.querySelector("input") || wrapper.querySelector("select");
        inputEl.value = "";
      });
    }
  };

  // app
  return (
    <FormWrapper>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="inputCon">
          <label htmlFor="first_name">First name</label>
          <input
            name="First name"
            id="first_name"
            placeholder="Enter first name"
            type="text"
          />
          <small className="errorMsg"></small>
        </div>

        <div className="inputCon">
          <label htmlFor="last_name">Last name</label>
          <input
            name="Last name"
            id="last_name"
            placeholder="Enter last name"
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
            <option disabled value="select">
              Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
          Submit
        </button>
      </form>
    </FormWrapper>
  );
};

Form.propTypes = {
  entryList: PropTypes.array,
  setEntryList: PropTypes.func,
  storeList: PropTypes.func
};

export default Form;
