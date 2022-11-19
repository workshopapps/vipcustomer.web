import Navbar from "../general/navbar/Navbar";
import React from "react";
import Input from "../auth/Input";
import { BtnContainer, ConsultStyled, FormStyled } from "./Consultation.styled";

const Consultation = () => {
  return (
    <div>
      <Navbar />
      <ConsultStyled>
        <h1>Schedule a consultation</h1>
        <p>Complete form to schedule a consultation with us</p>

        <FormStyled>
          <Input
            label="First Name"
            id="fname"
            errorMessage="Please input a valid first name"
            isError={false}
            type="text"
          />
          <Input
            label="Last Name"
            id="lname"
            errorMessage="Please input a valid last name"
            isError={false}
            type="text"
          />
          <Input
            label="Email"
            id="email"
            errorMessage="Please input a valid email"
            isError={false}
            type="email"
          />
          <Input
            label="Mobile"
            id="mobile"
            errorMessage="Please input a valid mobile number"
            isError={false}
            type="number"
          />
          <Input
            label="Location"
            id="location"
            errorMessage="Please input a valid location"
            isError={false}
            type="text"
          />
          <BtnContainer>
            <button type="submit" className="submit">
              Schedule a call
            </button>
            <button type="reset" className="reset" disabled={true}>
              Reset
            </button>
          </BtnContainer>
        </FormStyled>
      </ConsultStyled>
    </div>
  );
};

export default Consultation;
