import React from "react";
import { ResultsWrapper, WrapperRow } from "./vipResult.Styled";
import { Text, HeaderText } from "./Text";
import { _vip } from "./data";
import ResultsNavBar from "./ResultsNavBar";

// app
const VipResult = () => {
  return (
    <ResultsWrapper>
      <section className="wrapper__container">
        <ResultsNavBar />
        <WrapperRow>
          <HeaderText text="Name" />
          <HeaderText text="Category" />
          <HeaderText text="Gender" />
          <HeaderText text="Networth" />
          <HeaderText text="Career" />
        </WrapperRow>

        {_vip.map((vip, index) => {
          const { name, category, gender, netWorth, career } = vip;
          return (
            <WrapperRow key={index}>
              <Text text={name} />
              <Text text={category} />
              <Text text={gender} />
              <Text text={netWorth} />
              <Text text={career} />
            </WrapperRow>
          );
        })}
      </section>
    </ResultsWrapper>
  );
};

export default VipResult;
