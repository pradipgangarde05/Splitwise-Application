import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNavigationLinks() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }

  return (
    <>
      <Navbar data-bs-theme="light" expand="lg-10">
        <Container>
          <Navbar.Brand href="/split-bill"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/user-list"}>
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to={"/split-bill"}>
                SplitBill
              </Nav.Link>
              <Nav.Link as={Link} to={"/billdivider"}>
                BillSplit
              </Nav.Link>
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavigationLinks;
