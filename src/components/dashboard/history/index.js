import { LinkStyles } from "components/auth/signup/signup.styled";
import React, { useEffect, useState } from "react";
import { AuthStore } from "store/contexts/AuthContext";
import styled from "styled-components";
import Paginate from "../top-ranked/paginate/Paginate";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";

function index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const { _axios, headers } = AuthStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  async function getHistory(
    page = currentPage,
    start = startDate,
    end = endDate
  ) {
    try {
      setIsLoading(true);
      setIsError(false);
      const { data } = await _axios.get(
        `/api/history/?size=10&page=${page}${
          start ? `&start_datetime=${start} 00:00:00.000000` : ""
        }${end ? `&end_datetime=${end} 00:00:00.000000` : ""}`
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

  //delete all
  async function clearHistory() {
    await _axios.delete("/api/history/delete/all");
    getHistory(1);
  }

  //delete select history
  async function deleteHistory(id) {
    await _axios.delete("/api/history/delete/selected", {
      data: {
        history_ids: [id]
      }
    });
    getHistory();
  }

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

  if (
    !isLoading &&
    !isError &&
    data.items.length === 0 &&
    !startDate &&
    !endDate
  ) {
    return (
      <>
        <SpinnerContainer>
          <div>
            You do not have any history at the moment.
            <LinkStyles to=".."> Make a search?</LinkStyles>
          </div>
        </SpinnerContainer>
      </>
    );
  }

  return (
    <>
      <FilterContainer>
        <div>
          From:{" "}
          <input
            type="date"
            onChange={(e) => {
              const date = e.target.value;
              setStartDate(date);
              getHistory(1, date);
            }}
            value={startDate}
          />
        </div>
        <div>
          To:{" "}
          <input
            type="date"
            onChange={(e) => {
              const date = e.target.value;
              setEndDate(date);
              getHistory(1, undefined, date);
            }}
            value={endDate}
          />
        </div>
      </FilterContainer>
      <Container>
        <TableHeading>
          <div>Date</div>
          <div>Search</div>
          <div>Occupation</div>
          <div>Age</div>
          <div>Gender</div>
          <div>Vip?</div>
        </TableHeading>
        {data &&
          data.items.map((value) => (
            <TableRow key={value.history_id}>
              <div>{value.created_at.substring(0, 10)}</div>
              <div>{value.search_input.name}</div>
              <div>
                {value.result?.occupation[0]?.replaceAll("_", " ") || "-"}
              </div>
              <div>{value.result?.age || "-"}</div>
              <div>{value.result?.gender || "-"}</div>
              <div>
                <IsVip isVip={value.result.is_vip}>
                  {value.result.is_vip ? "Yes" : "No"}
                </IsVip>
              </div>
              <Delete onClick={() => deleteHistory(value.history_id)}>
                <AiFillDelete />
              </Delete>
            </TableRow>
          ))}
      </Container>

      <BottomContainer>
        <ClearBtn onClick={clearHistory}>
          <div
            style={{
              fontSize: "2rem",
              display: "grid",
              placeItems: "center"
            }}>
            <TiDeleteOutline />
          </div>
          <span>Clear History </span>
        </ClearBtn>
        <Paginate
          postPerPage={10}
          totalPost={data.total}
          currentPage={currentPage}
          paginate={(number) => {
            setCurrentPage(number);
            getHistory(number);
          }}
        />
      </BottomContainer>
    </>
  );
}

export default index;

const FilterContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
      border: 1px solid black;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`;

const Delete = styled.div`
  color: #aaa;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #ff414e;
  }
`;

const ClearBtn = styled.div`
  padding: 0.5rem 1.5rem;
  background-color: #ff414e;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 1.5rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
  color: ${(props) => (props.isVip ? "green" : "#ff414e")};
`;

const Container = styled.div`
  border: 1px solid #b5b7c0;
  border-radius: 8px;
  margin: 3rem 0;

  & > div:not(:last-child) {
    border-bottom: 1px solid #b5b7c0;
  }
`;

const TableRow = styled.div`
  color: black;
  font-size: 1.6rem;
  padding: 1.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 1fr 0.5fr;
  justify-content: space-between;
`;

const TableHeading = styled(TableRow)`
  color: #b5b7c0;
  font-weight: 700;
  font-size: 2.2rem;
`;
