import "./Navbar.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,FormControl,NavDropdown,Nav,Dropdown,Navbar,Container, Row ,Col, Carousel} from 'react-bootstrap';
import slash from "./slash.png";

function Navb(){
    return(
        <div className="Navbar">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand  href="#home" class="text-white">HexBeat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Artist</Nav.Link>
                        <NavDropdown  title="Genres" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">POP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Metal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">POP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Metal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">POP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Metal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">POP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Metal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">POP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Metal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">POP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Metal</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button className=" mr-sm-2" variant="outline-info" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
               
            </Navbar>
            <Carousel>
                <Carousel.Item>
                    <img src={slash}></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slash}></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slash}></img>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Navb