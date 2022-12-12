import { LinkStyles } from "components/auth/signup/signup.styled";
import React, { useEffect, useState } from "react";
import { AuthStore } from "store/contexts/AuthContext";
import styled from "styled-components";
import Paginate from "../top-ranked/paginate/Paginate";

function index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const { _axios, headers } = AuthStore();
  const [currentPage, setCurrentPage] = useState(1);

  async function getHistory(page = currentPage, start, end) {
    try {
      setIsLoading(true);
      setIsError(false);
      const { data } = await _axios.get(
        `/api/history/?size=10&page=${page}${
          start ? `&start_datetime=${start}` : ""
        }${end ? `&end_datetime=${end}` : ""}`
      );

      setData(data);
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

  if (!isLoading && !isError && data.items.length === 0) {
    return (
      <SpinnerContainer>
        <div>
          You do not have any history at the moment.
          <LinkStyles to=".."> Make a search?</LinkStyles>
        </div>
      </SpinnerContainer>
    );
  }

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
          data.items.map((value) => (
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
      <Paginate
        postPerPage={10}
        totalPost={data.total}
        currentPage={currentPage}
        paginate={(number) => {
          setCurrentPage(number);
          getHistory(number);
        }}
      />
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
  padding: 1.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
`;

const TableHeading = styled(TableRow)`
  color: #b5b7c0;
  font-weight: 700;
  font-size: 2.2rem;
`;
