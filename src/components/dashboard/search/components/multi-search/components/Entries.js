import React, { useState, useRef, useEffect } from "react";
import axios from "api/axios";
import PropTypes from "prop-types";
import Loading from "../../loading";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import EntriesWrapper, { EntryWrapper } from "./entries.styled";

// app
const Entries = (props) => {
  const { entryList, setEntryList, storeList, setVip } = props;

  const buttonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFetch = async (list) => {
    setLoading(true);
    setVip(undefined);
    setError(false);
    // Post WITH AXIOS
    try {
      const response = await axios.post("/api/search/search-many", {
        data: list
      });

      setVip(response.data);
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      setError(true);
      setVip(undefined);
      console.log(error);
      return undefined;
    }
  };

  useEffect(() => {
    buttonRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }, [entryList]);

  return (
    <EntriesWrapper>
      {entryList.map((entry) => {
        return (
          <Entry
            key={entry.id}
            entry={entry}
            setEntryList={setEntryList}
            entryList={entryList}
            storeList={storeList}
          />
        );
      })}

      <div className={`error ${error ? "show" : ""}`}>
        <small>An error occured. Please try again </small>
      </div>

      <Loading loading={loading} />

      <button
        ref={buttonRef}
        className="f fcenter"
        onClick={() => handleFetch(entryList)}
        disabled={entryList.length < 1}>
        <span>Upload</span>

        <span className="icon f fcenter">
          <AiOutlineCloudUpload />
        </span>
      </button>
    </EntriesWrapper>
  );
};

Entries.propTypes = {
  entryList: PropTypes.array,
  setEntryList: PropTypes.func,
  storeList: PropTypes.func,
  setVip: PropTypes.func
};
export default Entries;

// single entry here
const Entry = (props) => {
  const { entry, entryList, setEntryList, storeList } = props;

  const { name, email, gender, age, id } = entry;
  const [entryOpen, setEntryOpen] = useState(false);

  // dynamic css height of the entry details element to enable transition
  let height = 0;
  height =
    (email ? height++ : height,
    gender ? height++ : height,
    age ? height++ : height,
    height);

  // delete entry
  function deleteEntry(id) {
    const newList = entryList.filter((entry) => entry.id !== id);
    setEntryList(newList);
    storeList(newList);
  }

  // open entry
  function showEntry() {
    setEntryOpen(!entryOpen);
  }

  // app
  return (
    <EntryWrapper height={25 * height}>
      {/* header */}
      <h3 onClick={showEntry} className="f entry__header">
        <small className="name">{name}</small>

        <div className="icon__wrap f">
          <span className={`icon ${entryOpen ? "rotate" : ""}`}>
            <MdKeyboardArrowUp />
          </span>

          <span onClick={() => deleteEntry(id)}>
            <MdDelete />
          </span>
        </div>
      </h3>

      {/* content / other params */}
      <div className={`details ${entryOpen ? "" : "close"}`}>
        {email && (
          <div className="row">
            <small></small>
            <span>Email</span>
            <p>{email}</p>
          </div>
        )}

        {gender && (
          <div className="row">
            <small></small>
            <span>Gender</span>
            <p>{gender}</p>
          </div>
        )}

        {age && (
          <div className="row">
            <small></small>
            <span>Age</span>
            <p>{age}</p>
          </div>
        )}
      </div>
    </EntryWrapper>
  );
};

Entry.propTypes = {
  entry: PropTypes.object,
  entryList: PropTypes.array,
  setEntryList: PropTypes.func,
  storeList: PropTypes.func
};
