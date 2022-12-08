import React from "react";
import { InstructionsWrapper } from "./csv.styled";
import SampleCSV from "../assets/sample.csv";

const Instructions = () => {
  return (
    <InstructionsWrapper>
      <h2>Steps</h2>

      <div className="instruction">
        <div className="row">
          <small></small>
          <p>Click on the Browse file box to select a csv file</p>
        </div>
        <div className="row">
          <small></small>
          <p>After selection, Click the upload button</p>
        </div>
        <div className="row">
          <small></small>
          <p>Await your vips results</p>
        </div>
      </div>

      <h2>CSV formats</h2>

      <div className="instruction">
        <div className="row">
          <small></small>
          <p>Download the sample csv to see accepted formats</p>
        </div>
        <div className="row">
          <small></small>
          <p>Leave empty spaces for unknow values</p>
        </div>
        <div className="row">
          <small></small>
          <p>Do not use commas (,) in the csv values </p>
        </div>
        <div className="row">
          <small></small>
          <p>The name parameter is compulsory</p>
        </div>
      </div>

      <a className="button f fcenter" href={SampleCSV} download={"sample"}>
        Download sample CSV
      </a>
    </InstructionsWrapper>
  );
};

export default Instructions;
