import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Navbar'
import Item from "./Components/item/Item"

function HomePage() {
  
    return (
      <div>
        <Nav></Nav>
        <div className="bdy" class="container" >
          <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div><h1 class="titles">New Musics</h1></div>
            <div className="slideBar">
            <OwlCarousel className='owl-theme' loop margin={1}>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </OwlCarousel>
            </div>
          </div>
          <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <div><h1 class="titles">Top 10 Musics</h1></div>
            <div className="slideBar">
            <OwlCarousel className='owl-theme' loop margin={1}>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </OwlCarousel>
            </div>
          </div>
          <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <div><h1 class="titles">Top 10 Albums</h1></div>
            <div className="slideBar">
            <OwlCarousel className='owl-theme' loop margin={1}>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </OwlCarousel>
            </div>
          </div>
          <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <div><h1 class="titles">Top 10 Artists</h1></div>
            <div className="slideBar">
            <OwlCarousel className='owl-theme' loop margin={1}>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </OwlCarousel>
            </div>
          </div>
        </div> 
        <div className="Foot">
          <div class="container-fluid !direction !spacing">
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
              <div class="col-md-4 col-sm-12">
                Provided by HexClan Team
              </div>
              <div class="col-md-4 col-sm-12">
                مطابق قوانین جمهوری اسلامی ایران 
              </div>
              <div class="col-md-4 col-sm-12">
                پیوند ها 
              </div>
            </div>
          </div>
        </div>  
      </div>
  );
}

export default HomePage;