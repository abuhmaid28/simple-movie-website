import { Container, Form, Navbar } from "react-bootstrap";

function NavBar({ searchMovie }) {
  // Function to handle search input and call searchMovie function
  const onSearch = (word) => {
    searchMovie(word);
  };

  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        {/* Logo or brand link */}
        <Navbar.Brand href="/">أفلامك</Navbar.Brand>
        {/* Toggle button for mobile responsive */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* Search form */}
        <Navbar.Collapse id="navbarScroll">
          <Form.Control
            onChange={(e) => {
              // Call onSearch function on input change
              onSearch(e.target.value);
            }}
            type="search"
            placeholder="إبحث"
            className=" w-50 mx-auto"
            aria-label="Search"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
