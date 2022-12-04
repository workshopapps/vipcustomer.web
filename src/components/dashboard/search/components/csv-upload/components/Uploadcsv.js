import React, { useRef, useState } from "react";
import { UploadcsvWrapper } from "./csv.styled";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Loading from "../../loading";
import csvParser from "../utils";

const Uploadcsv = () => {
  const input = useRef();
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

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

  function handleFetch(array) {
    console.log(array);
    console.log(array[0]["age"]);
  }

  function handleUpload(e) {
    e.preventDefault();

    if (!file) {
      console.log("no file");
      return;
    }

    if (!file.type.match("text/csv")) {
      console.log("file not a csv");
      return;
    }

    console.log("file is csv");
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

        {/* <Loading/> */}
        <p className="error">{"error"}</p>

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

export default Uploadcsv;

{
  /* <img src={UploadImage} alt="upload image" /> */
}
