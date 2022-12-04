import React, { useState } from "react";
import ShowVip from "../../multi-search/components/ShowVip";
import CsvWrapper from "./csv.styled";
import Instructions from "./Instructions";
import Uploadcsv from "./Uploadcsv";

// app
const CSV = () => {
  const [vip, setVip] = useState(undefined);

  return (
    <>
      <CsvWrapper>
        <Uploadcsv setVip={setVip} />
        <Instructions />
      </CsvWrapper>

      {vip && <ShowVip vip={vip} setVip={setVip} />}
    </>
  );
};

export default CSV;
