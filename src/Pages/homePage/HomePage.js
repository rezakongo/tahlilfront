import React from 'react'
import './HomePage.css';
import Nav from './Components/Navbar/Navbar'
import Item from "./Components/item/Item"
import Container from "./Components/Container/Container"



function HomePage() {
  
  
  const Album={
    title:'8 Mile',
    artist:'Eminem',
    rating:4.5,
    pic:'./item/eminem.jpg',
  }
  return (
    <div>
      <Nav></Nav>
      <div  className="container" >
        <div className="row slideContainer">
          <div><h1 className="titr">New Albums</h1></div>
          <Container></Container>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
