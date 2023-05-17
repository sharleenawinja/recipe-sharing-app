interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li
            key={page}
            className={`inline-block px-3 py-1 mx-1 text-white rounded-lg cursor-pointer bg-blue-700 hover:bg-blue-800 focus:outline-none focus:bg-blue-700 focus:text-white ${
              page === currentPage ? "bg-blue-900 " : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
