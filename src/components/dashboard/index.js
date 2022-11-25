import React, { useState, useEffect } from "react";

import NavBar from "./components/navbar";
import Upload from "./components/upload";
import Almost from "./components/almost";
import VipResult from "./components/vip-result";

//hooks
import axios from "./components/api";
import { useLocalStorage } from "hooks/useLocalStorage";

import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [step, setStep] = useState(0);
  const [namesData, setNamesData] = useState([]);
  const [uploadState, setUploadState] = useState({
    isUploading: false,
    uploadError: false
  });
  const [responseData, setResponseData] = useState({});
  const [username, setUsername] = useState("");

  //localStorage hook
  const [storedValue, setValue] = useLocalStorage("storedEntries", []);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => onChange(step + 1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const user = storedUser.user;
      setUsername(user.first_name);
    }
    console.table(storedValue);
    setNamesData(storedValue);
  }, []);

  //Adds entry to list
  function handleNamesData(data) {
    const newEntry = {
      name: data.name,
      gender: data.gender,
      occupation: data.occupation,
      age: data.age,
      email: data.email
    };
    setNamesData([...namesData, newEntry]);
    console.log(namesData);
  }

  //Removes entry from lists
  function removeEntry(id) {
    const filteredEntries = namesData.filter((_, index) => index !== id);
    setNamesData(filteredEntries);
    localStorage.removeItem("storedEntries");
  }

  //Upload entries function
  async function handleUpload() {
    setUploadState({ ...uploadState, isUploading: true, uploadError: false });
    setValue(namesData);

    setTimeout(async () => {
      setStep(1);

      try {
        const { data } = await axios.post("/api/search/search-many", {
          data: namesData
        });
        setUploadState({ ...uploadState, isUploading: false });
        setResponseData(data);
        console.log(data);
        setStep(2);
      } catch (error) {
        console.log(error?.response);
        setUploadState({
          ...uploadState,
          uploadError: true,
          isUploading: false
        });
        setStep(2);
      }
    }, 2000);
  }

  return (
    <main className={styles.main}>
      <NavBar />

      {/* Switch statement to render components based on upload progress */}
      <div className={styles.container}>
        {(() => {
          switch (step) {
            case 0:
              return (
                <Upload
                  username={username}
                  onNext={onNext}
                  namesData={namesData}
                  handleNamesData={handleNamesData}
                  removeEntry={removeEntry}
                  handleUpload={handleUpload}
                  uploadState={uploadState}
                />
              );

            case 1:
              return <Almost username={username} onNext={onNext} step={step} />;

            case 2:
              return <Almost onNext={onNext} step={step} />;

            case 3:
              return (
                <VipResult username={username} responseData={responseData} />
              );
            default:
              return null;
          }
        })()}
      </div>
    </main>
  );
}
