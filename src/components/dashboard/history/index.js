import { LinkStyles } from "components/auth/signup/signup.styled";
import React, { useEffect, useState } from "react";
import { AuthStore } from "store/contexts/AuthContext";
import Paginate from "../top-ranked/paginate/Paginate";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import {
  Modal,
  FilterContainer,
  Delete,
  BottomContainer,
  ClearBtn,
  Container,
  ErrorContainer,
  IsVip,
  SpinnerContainer,
  TableHeading,
  TableRow
} from "./history.styled";

function index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const { _axios, headers } = AuthStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        }${end ? `&end_datetime=${end} 23:59:59.999999` : ""}`
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
    setModalIsOpen(false);
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
    <div style={{ position: "relative" }}>
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
          <div className="center">Age</div>
          <div className="center">Gender</div>
          <div className="center">Vip?</div>
        </TableHeading>
        {data &&
          data.items.map((value) => (
            <TableRow key={value.history_id}>
              <div>{value.created_at.substring(0, 10)}</div>
              <div>{value.search_input.name}</div>
              <div>
                {value.result?.occupation[0]?.replaceAll("_", " ") || "-"}
              </div>
              <div className="center">{value.result?.age || "-"}</div>
              <div className="center">{value.result?.gender || "-"}</div>
              <div className="center">
                <IsVip isVip={value.result.is_vip}>
                  {value.result.is_vip ? "Yes" : "No"}
                </IsVip>
              </div>
              <Delete
                className="center"
                onClick={() => deleteHistory(value.history_id)}>
                <AiFillDelete />
              </Delete>
            </TableRow>
          ))}
      </Container>

      <BottomContainer>
        <ClearBtn onClick={() => setModalIsOpen(true)}>
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
      {modalIsOpen && (
        <Modal>
          <div>
            Are you sure you want to clear ALL your search history?
            <div>
              <button className="outline" onClick={() => setModalIsOpen(false)}>
                Cancel
              </button>
              <button className="fill" onClick={clearHistory}>
                Yes, Clear All
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default index;
