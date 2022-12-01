import React, { useState } from "react";

import NavBar from "./components/navbar";
import Upload from "./components/upload";
import Almost from "./components/almost";
import VipResult from "./components/vip-result";
import axios from "./components/api";

import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [step, setStep] = useState(0);
  const [namesData, setNamesData] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [responseData, setResponseData] = useState({});

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => onChange(step + 1);

  function handleNamesData(data) {
    const newEntry = {
      name: data.name,
      gender: data.gender,
      occupation: data.occupation,
      age: data.age,
      email: data.email
    };
    setNamesData([...namesData, newEntry]);
  }

  function removeEntry(id) {
    const filteredEntries = namesData.filter((_, index) => index !== id);
    setNamesData(filteredEntries);
  }

  //Upload entries function
  async function handleUpload() {
    setIsUploading(true);
    setStep(1);
    console.log(JSON.stringify(namesData));

    try {
      const { data } = await axios.post("/api/search/search-many", {
        data: namesData
      });

      setResponseData(data);
      console.log(data);
      setStep(2);
    } catch (error) {
      console.log(error?.response);
      setStep(2);
    }
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
                  onNext={onNext}
                  namesData={namesData}
                  handleNamesData={handleNamesData}
                  removeEntry={removeEntry}
                  handleUpload={handleUpload}
                />
              );

            case 1:
              return (
                <Almost onNext={onNext} step={step} isUploading={isUploading} />
              );

            case 2:
              return <Almost onNext={onNext} step={step} />;

            case 3:
              return <VipResult responseData={responseData} />;
            default:
              return null;
          }
        })()}
      </div>
    </main>
  );
}
