import styles from "./Grid.module.css";
const Grid = ({ data }) => {
  const getRowItems = (row, isHeader) => {
    const rowItems = [];
    for (const [key, value] of Object.entries(row)) {
      if (isHeader) {
        rowItems.push(<th className={`${styles.tableRows} ${styles.tableHeaders}`}>{key}</th>);
      } else {
        rowItems.push(<td className={styles.tableRows}>{value}</td>);
      }
    }
    return rowItems;
  };
  return (
    
    <table className={styles.table}>
      <tr>{getRowItems(data[0], true)}</tr>
      {data.map((row, idx) => (
        <tr key={idx}>{getRowItems(row, false)}</tr>
      ))}
    </table>
  
  );
};
export default Grid;
