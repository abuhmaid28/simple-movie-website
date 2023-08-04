import ReactPaginate from "react-paginate";

function MoviePagination({ fetchMoviesPage }) {
  // Function to handle page click and fetch movies for the selected page
  const handlePageClick = (data) => {
    fetchMoviesPage(data.selected + 1); // Incrementing data.selected by 1 because it starts from 0
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick} // Call handlePageClick function on page change
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={500} // Total number of pages (this value should come from the server)
      previousLabel="< السابق"
      containerClassName="pagination justify-content-center pt-4 flex-wrap"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      nextClassName="page-item"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active" // Class name for the active page link
    />
  );
}

export default MoviePagination;
