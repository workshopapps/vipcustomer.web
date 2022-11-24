import React, { useState } from "react";

import NavBar from "./components/navbar";
import Upload from "./components/upload";
import Almost from "./components/almost";
import VipResult from "./components/vip-result";

import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [step, setStep] = useState(0);
  const [namesData, setNamesData] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => onChange(step + 1);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(namesData)
  };

  function handleUpload() {
    setIsUploading(true);

    fetch("http://54.164.135.3/api/saerch/search-many/", options)
      .then((data) => {
        if (!data.ok) {
          setStep(0);
          setIsUploading(false);
          throw Error(data.status);
        }
        onNext();
        return data.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleNamesData(data) {
    const newEntry = {
      id: namesData.length + 1,
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
              return <VipResult />;
            default:
              return null;
          }
        })()}
      </div>
    </main>
  );
}
