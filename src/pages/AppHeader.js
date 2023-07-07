import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <>
      <Navbar>
        <Container>         
          <Navbar.Brand href="/">
            <img
              src="image/Logo.png"
              width="190"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Form className="d-flex">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
            </Nav>
            <Button variant="outline-success" href="/signup">
              SignUp
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default AppHeader;
