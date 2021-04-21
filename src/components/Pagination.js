const Pagination = ({ paginate, totalChannels, channelsPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChannels / channelsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            style={{
              marginLeft: "10px",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
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
