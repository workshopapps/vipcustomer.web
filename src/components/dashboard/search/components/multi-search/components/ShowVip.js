import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Result from "../../results";
import ShowVipWrapper from "./showvip.styled";

const ShowVip = ({ vip = [1] }) => {
  const _vip = vip.flat();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [vip]);

  return (
    <ShowVipWrapper>
      {_vip.length < 1 ? (
        <>
          <div className="notFound">
            <br />
            <h2>Ooops</h2>
            <h2>We couldnt find a VIP</h2>
            <h2>Please try again</h2>
          </div>
        </>
      ) : (
        <>
          <h2 className="heading">Hurray VIP Results</h2>
          <Result vip={_vip} />
        </>
      )}
    </ShowVipWrapper>
  );
};

ShowVip.propTypes = {
  vip: PropTypes.array,
  setVip: PropTypes.func
};

export default ShowVip;
