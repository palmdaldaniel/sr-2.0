import styles from '../pages/css/HomePage.module.css'


const Pagination = ({ paginate, totalChannels, channelsPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChannels / channelsPerPage); i++) {
    pageNumbers.push(i);
  }




  return (
    <div className={styles.paginationWrapper}>
      <ul className={styles.paginationContent}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
