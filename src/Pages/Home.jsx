import React, { useState, useEffect } from "react";
import Grid from "../components/Grid/Grid.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import styles from "./Home.module.css";

const callApi = async () => {
  const response = await fetch(
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  );
  const jsonData = await response.json();
  return jsonData;
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [paginatedList, setPaginatedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const maxItems = 10;
  const totalPages = Math.ceil(list.length / maxItems);

  useEffect(() => {
    setIsLoading(true);
    const loadList = async () => {
      try {
        const data = await callApi();
        setList(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    loadList();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * maxItems;
    const endIndex = Math.min(currentPage * maxItems, list.length);
    setPaginatedList(list.slice(startIndex, endIndex));
  }, [currentPage, list]);

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <p style={{ fontSize: "3vw" }}>Loading...</p>
        </div>
      ) : (
        <div className={styles.wrapper}>
          {paginatedList.length > 0 && (
            <div className={styles.gridWrapper}>
              <Grid data={paginatedList}></Grid>
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};
export default Home;
