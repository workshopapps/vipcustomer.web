import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { UploadcsvWrapper } from "./csv.styled";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Loading from "../../loading";
import csvParser from "../utils";
import { AuthStore } from "store/contexts/AuthContext";

const Uploadcsv = ({ setVip }) => {
  const { _axios } = AuthStore();

  const input = useRef();
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  // loding and error states
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  function handleSelectFile() {
    input.current.addEventListener("change", (e) => {
      setFileName("");
      setFile(null);
      const file = e.target.files[0];
      if (!file) return;
      setFileName(file.name);
      setFile(file);
    });

    input.current.click();
  }

  async function handleFetch(array) {
    console.log(array);
    // check for name prop
    if (!array[0].name) {
      setError("Invalid CSV, Name prop is missing");
      return;
    }

    setLoading(true);
    setVip(undefined);

    // Post WITH AXIOS
    try {
      const response = await _axios.post("/api/search/search-many", {
        data: array
      });
      setVip(response.data);
      console.log(response.data.flat());
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      setError("unexpected error, please try again");
      setVip(undefined);
      console.log(error);
      return;
    }
  }

  function handleUpload(e) {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Please add a CSV file");
      return;
    }

    if (!file.type.match("text/csv")) {
      setError("The file passed is not a csv");
      return;
    }

    csvParser(file, handleFetch);
  }

  return (
    <UploadcsvWrapper>
      <h2>Upload Document</h2>

      <form>
        <div onClick={handleSelectFile} className="upload__div">
          <span className="icon">
            <AiOutlineCloudUpload />
          </span>

          <span className="file">{fileName || "CSV Only"}</span>

          <p>Browse files here</p>
        </div>

        <input ref={input} hidden type="file" accept=".csv" />

        <Loading loading={loading} />
        <p className="error">{error}</p>

        <button onClick={handleUpload} className="f fcenter" type="submit">
          <span className="icon f fcenter">
            <AiOutlineCloudUpload />
          </span>

          <span>Upload</span>
        </button>
      </form>
    </UploadcsvWrapper>
  );
};

Uploadcsv.propTypes = {
  setVip: PropTypes.func
};

export default Uploadcsv;

// const test = [
//   { "name": "mark essien", "gender": "male" },

//   { "name": "bernard arnault", "gender": "male", "age": 73 },

//   { "name": "jeff bezos", "gender": "male", "age": 58 },

//   { "name": "kanye west", "gender": "male" },

//   { "name": "ronaldo", "gender": "male" },

//   { "name": "messi", "gender": "male" },

//   { "name": "elon musk", "gender": "male", "age": 51 },

//   { "name": "jennifer lopez", "gender": "female" },

//   { "name": "oprah winfrey", "gender": "female" },

//   { "name": "joe biden", "gender": "male" },

//   { "name": "barack obama", "gender": "male" },

//   { "name": "michael jordan", "gender": "male" },

//   { "name": "tiger woods", "gender": "male" },

//   { "name": "lebron james", "gender": "male" },

//   { "name": "david beckham", "gender": "male" },

//   { "name": "bill gates", "gender": "male", "age": 67 },

//   { "name": "warren buffet", "gender": "male", "age": 92 },

//   { "name": "trevor noah", "gender": "male" },

//   { "name": "rihanna", "gender": "female" },

//   { "name": "beyonce", "gender": "female" },

//   { "name": "jay z", "gender": "male" },

//   { "name": "tyler perry", "gender": "male" },

//   { "name": "jackie chan", "gender": "male" },

//   { "name": "george clooney", "gender": "male" },

//   { "name": "robert deniro", "gender": "male" },

//   { "name": "jessica alba", "gender": "female" },

//   { "name": "angelina jolie", "gender": "female" },

//   { "name": "julia roberts", "gender": "female" },

//   { "name": "wizkid", "gender": "male" },

//   { "name": "burnaboy", "gender": "male" },

//   { "name": "davido", "gender": "male" },

//   { "name": "aliko dangote", "gender": "male" },

//   { "name": "femi otedola", "gender": "male" },

//   { "name": "tony elumelu", "gender": "male" },

//   { "name": "kim kardashian", "gender": "female" },

//   { "name": "larry p"age"", "gender": "male" },

//   { "name": "alice walton", "gender": "female", "age": 73 },

//   { "name": "michael bloomberg" },

//   { "name": "amancio ortega" },

//   { "name": "jim walton" },

//   { "name": "j.k rowling" },

//   { "name": "stephen kings" },

//   { "name": "danielle steele" },

//   { "name": "nora roberts" },

//   { "name": "james patterson" },

//   { "name": "chimamanda adichie" },

//   { "name": "satoshi nakamato" },

//   { "name": "giorgio armani" },

//   { "name": "stefano gabbana" }
// ];
