import "./Navbar.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container, Row ,Col, Carousel} from 'react-bootstrap';
import slash from "./slash.png";

function Nav(){
    return(
        <div className="Navbar">
            <Navbar>

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

export default Nav