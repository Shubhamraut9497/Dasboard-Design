import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NextHeader() {
  return (
    <>
    <Navbar bg="light" expand="lg"className='next'>
      <Container fluid>
        <Navbar.Brand href="#">All</Navbar.Brand>
        <Navbar.Brand href="#">Live</Navbar.Brand>
        <Navbar.Brand href="#">Draft</Navbar.Brand>
        <Navbar.Brand href="#">Archieved</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <NavDropdown title="Select Team" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Team 1 </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Team 2
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action5">
                Team 3
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container><br/>
     
    </Navbar>
    <Link to ={"/content"}>
    <Button variant="primary" style={{marginLeft:'210px',marginTop:'20px'}} className='btns'>Click to See All Courses</Button>
    </Link>
    </>
  );
}

export default NextHeader;