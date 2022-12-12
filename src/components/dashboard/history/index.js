// please export your page here
import React, { useCallback, useEffect, useState } from "react";
import { AuthStore } from "store/contexts/AuthContext";
import styled from "styled-components";

function index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const { _axios, headers } = AuthStore();

  async function getHistory() {
    try {
      const res = await _axios.get("/api/history/");
      setData(res.data.items);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!headers) return;

    getHistory();
  }, [headers]);

  if (isLoading)
    return (
      <SpinnerContainer>
        <div className="spinner" style={{ width: 50, height: 50 }}></div>
      </SpinnerContainer>
    );

  if (isError)
    return (
      <SpinnerContainer>
        <ErrorContainer>
          <div>An error occured</div>
          <button onClick={getHistory}>Try again</button>
        </ErrorContainer>
      </SpinnerContainer>
    );

  return (
    <>
      <Container>
        <TableHeading>
          <div>Date</div>
          <div>Search</div>
          <div>Age</div>
          <div>Gender</div>
          <div>Vip?</div>
        </TableHeading>
        {data &&
          data.map((value) => (
            <TableRow key={value.history_id}>
              <div>{value.created_at.substring(0, 10)}</div>
              <div>{value.search_input.name}</div>
              <div>{value.result?.age || "-"}</div>
              <div>{value.result.gender || "-"}</div>
              <div>
                <IsVip isVip={value.result.is_vip}>
                  {value.result.is_vip ? "Yes" : "No"}
                </IsVip>
              </div>
            </TableRow>
          ))}
      </Container>
    </>
  );
}

export default index;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  & > div {
    font-weight: 700;
    text-transform: capitalize;
  }

  & > button {
    padding: 1rem;
    border: 1px solid #aaa;
  }
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15rem;
  display: flex;
  justify-content: center;
`;

const IsVip = styled.span`
  font-weight: 700;
  color: ${(props) => (props.isVip ? "green" : "red")};
`;

const Container = styled.div`
  border: 1px solid #b5b7c0;
  border-radius: 8px;

  & > div:not(:last-child) {
    border-bottom: 1px solid #b5b7c0;
  }
`;

const TableRow = styled.div`
  color: black;
  font-size: 1.6rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
`;

const TableHeading = styled(TableRow)`
  color: #b5b7c0;
  font-weight: 700;
  font-size: 2.2rem;
`;
