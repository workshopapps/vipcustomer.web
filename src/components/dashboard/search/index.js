// please export your page here
import React, { useState } from "react";
import { MultiSearch } from "./components/multi-search";
import { Nav } from "./components/nav";
import { SingleSearch } from "./components/single-search";
import { CSV } from "./components/csv-upload";

const Search = () => {
  const [tab, setTab] = useState(0);

  // app
  return (
    <>
      <Nav tab={tab} setTab={setTab} />

      {tab === 0 && <SingleSearch />}

      {tab === 1 && <MultiSearch />}

      {tab === 2 && <CSV />}
    </>
  );
};

export default Search;
