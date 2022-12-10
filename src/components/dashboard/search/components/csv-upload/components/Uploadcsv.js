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
      console.log(file.type);
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
