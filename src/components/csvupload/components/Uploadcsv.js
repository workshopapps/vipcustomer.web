import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { HiUpload } from "react-icons/hi";
import styled from "styled-components";
import NavBar from "../../general/navbar/Navbar";
import Footer from "../../general/footer/Footer";
import axios from "axios";
import Result from "components/dashboard/search/components/results";
import csvParser from "components/dashboard/search/components/csv-upload/utils";

// PORT=3666;

const Uploadcsv = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [csvFile, setCsvFile] = useState();
  const [vip, setVip] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // API request handling
  const sendPostRequest = async (array) => {
    console.log(array);
    if (!array[0].name) {
      setError("Invalid CSV, Name prop is missing");
      return;
    }
    setLoading(true);
    setVip(undefined);

    try {
      const resp = await axios.post(
        "https://api.starfinder.hng.tech/api/search/search-many",
        {
          data: array
        }
      );
      setVip(resp.data.flat());
      setLoading(false);
      return;
    } catch (err) {
      setLoading(false);
      setError("unexpected error, please try again");
      console.log(err);
      return;
    }
  };

  // On submit handling
  const Submit = () => {
    setError("");

    if (!csvFile) {
      setError("Please ensure you uploaded a CSV file");
      return;
    }

    if (!csvFile.type.match("text/csv")) {
      setError("The file uploaded is not a CSV");
      return;
    }

    csvParser(csvFile, sendPostRequest);
  };

  return (
    <>
      <NavBar />
      <UploadcsvDiv>
        <div className="main-container">
          <h1>Upload Document</h1>
          <p className="sub-text">Attach your CSV documents for analysis</p>

          <div
            className={`upload-container ${highlighted ? "general" : ""}`}
            onDragEnter={() => {
              setHighlighted(true);
            }}
            onDragLeave={() => {
              setHighlighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault;
              setHighlighted(false);
            }}>
            <BsCloudUpload className="cloud-icon" />
            <p className="drag-and-drop-p">Drag and Drop your files here</p>
            <p>{`${csvFile ? csvFile.name : "Only CSV files"}`}</p>
            <div className="browse-files-div">
              <p className="browse-files">Browse Files</p>
              <input
                type="file"
                accept=".csv"
                id="csvFile"
                onChange={(e) => {
                  setCsvFile(e.target.files[0]);
                }}
              />
            </div>
          </div>
          <div className={`spinner ${loading ? "" : "stop"}`}></div>
          <p className="error">{error}</p>
          <button
            className="upload-btn"
            onClick={() => {
              Submit();
            }}>
            <p>
              <HiUpload className="upload-icon" />
              <span> Upload</span>
            </p>
          </button>
        </div>
      </UploadcsvDiv>
      <ResultDiv>
        <div className="result-container">{vip && <Result vip={vip} />}</div>
      </ResultDiv>

      <Footer />
    </>
  );
};

const UploadcsvDiv = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center !important;
  justify-items: center;
  text-align: center;
  color: #323c60;
  margin: auto;
  align-content: center;
  padding-top: 10rem;
  @media screen and (max-width: 270px) {
    height: 100%;
  }
  .main-container {
    align-items: center !important;
    justify-items: center;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    height: fit-content;
    padding-bottom: 5%;
  }
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    margin-bottom: 3rem;
  }
  .sub-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 3rem;
  }
  .upload-container {
    position: relative;
    width: 302px;
    margin: 0 auto;
    height: 136px;
    border: 2px dashed rgba(152, 152, 160, 0.6);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: #f9f9ff;
    p:nth-last-child(1) {
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      color: #121212;
    }
    p:nth-last-child(2) {
      font-style: italic;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: rgba(0, 0, 0, 0.4);
    }
    .browse-files {
      font-weight: 600 !important;
      font-size: 16px;
      line-height: 27px !important;
      color: #091540 !important;
      position: relative;
    }
    input {
      opacity: 0;
      position: absolute;
      width: 300px;
      height: 130px;
      top: -96px;
      background-color: blue;
      cursor: pointer;
      position: absolute;
      left: -10px;
    }
  }
  .browse-files-div {
    position: relative;
  }
  .browse-files:hover,
  .browse-files-div:hover,
  .upload-icon:hover,
  .browse-files-div.dragover {
    opacity: 0.6;
    color: red;
  }

  .cloud-icon {
    width: 40px;
    height: 40px;
  }
  .upload-btn {
    background: #091540;
    border: 1px solid rgba(152, 152, 160, 0.6);
    border-radius: 10px;
    width: 302px;
    height: 46px;
    padding: 6.5px 24px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 33px;
    color: #ffffff;
    margin-top: 3px;
    cursor: pointer;
  }
  .upload-icon {
    width: 20px;
    height: 20px;
  }
  .general {
    border-color: red;
    background-color: blue;
    opacity: 3;
  }
  .spinner {
    margin: 5px auto;
  }
  .error {
    color: red;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 0.7em;
  }
  @media screen and (max-width: 380px) {
    .upload-container,
    .upload-btn {
      width: 250px;
    }
    .cloud-icon {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (max-width: 310px) {
    .upload-container,
    .upload-btn {
      width: 200px;
    }
    h1 {
      font-size: 28px;
      line-height: 29px;
    }
  }
  @media screen and (max-width: 270px) {
    .main-container {
      margin-bottom: 4rem;
    }
    .upload-container {
      p:nth-last-child(1) {
        font-weight: 400;
        font-size: 10px;
      }
      p:nth-last-child(2) {
        font-weight: 300;
        font-size: 10px;
      }
    }
    .upload-container,
    .upload-btn {
      width: 150px;
    }
    .cloud-icon {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (max-width: 210px) {
    h1 {
      font-size: 20px;
      line-height: 22px;
    }
    .upload-container,
    .upload-btn {
      width: 100px;
    }

    .drag-and-drop-p {
      font-size: 10px;
      line-height: 15px;
    }
    p:nth-last-child(2) {
      font-size: 10px;
      line-height: 10px;
    }
    .browse-files {
      font-size: 12px !important;
      line-height: 20px !important;
    }
  }
`;
const ResultDiv = styled.div`
  .result-container {
    width: 80%;
    margin: 0 auto;
  }
`;

export default Uploadcsv;
