import React from 'react'
import './HomePage.css';
import Nav from './Components/Navbar/Navbar'
import Item from "./Components/item/Item"
import ArtistsCarousel from "./Components/AtistsCarousel/ArtistsCarousel"



function HomePage() {
  
  return (
    <div>
      <Nav></Nav>
      <ArtistsCarousel></ArtistsCarousel>
    </div>
  );
}

export default HomePage;
