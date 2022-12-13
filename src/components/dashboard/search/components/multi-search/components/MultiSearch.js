import React, { useState, useEffect } from "react";
import Form from "./Form";
import Entries from "./Entries";
import MultiSearchWrapper from "./multisearch.styled";
import ShowVip from "./ShowVip";

// app
const MultiSearch = () => {
  const [entryList, setEntryList] = useState([]);
  const [vip, setVip] = useState(undefined);

  function setListToStorage(list) {
    localStorage.setItem("entrylist", JSON.stringify(list));
  }

  // effect to update entry on reload
  useEffect(() => {
    const _entryList = JSON.parse(localStorage.getItem("entrylist")) || [];
    setEntryList(_entryList);
  }, []);

  return (
    <>
      <MultiSearchWrapper>
        <section className="wrappers form">
          <h2 className="header">Add Entries Below</h2>
          <Form
            storeList={setListToStorage}
            setEntryList={setEntryList}
            entryList={entryList}
          />
        </section>

        <section className="wrappers entry">
          <h2 className="header">List of entries ({entryList?.length})</h2>
          <Entries
            storeList={setListToStorage}
            setEntryList={setEntryList}
            entryList={entryList}
            setVip={setVip}
          />
        </section>
      </MultiSearchWrapper>

      {vip && <ShowVip vip={vip} />}
    </>
  );
};

export default MultiSearch;
