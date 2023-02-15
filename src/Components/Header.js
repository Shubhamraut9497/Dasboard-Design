import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {BsThreeDotsVertical} from "react-icons/bs";
function Header() {
  return (
    <Navbar variant="light" bg="light" className='ms'>
      <Container>
        <Navbar.Brand href="#home">KNOWLEDGE</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary">CREATE COURSE</Button>
          <Navbar.Text>
            <Image
              src="https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png"
              width={40}
              height={40}
              alt="Round Profile"
              className='img'
            />
            <a href="#login" id="sign">
              <BsThreeDotsVertical />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
