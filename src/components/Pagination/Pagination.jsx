import styles from "./Pagination.module.css";
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handleClick = (e) => {
    switch (e.target.value) {
      case "previous":
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
        break;
      case "next":
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:"1.5vw"
      }}
    >
      <button
        className={styles.button}
        value="previous"
        onClick={handleClick}
      >
        Previous
      </button>
      <div
        className={`${styles.button} ${styles.pageNumber}`}
      >
        {currentPage}
      </div>
      <button
        className={styles.button}
        value="next"
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
