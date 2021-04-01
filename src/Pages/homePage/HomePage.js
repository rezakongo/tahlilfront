
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Navbar'
import SlideItem from "./Components/slideItem/Item"
import Item from "./Components/item/Item"

function HomePage() {
  
  return (
    <div>
    <Nav></Nav>
    <div className="bdy" class="container" >
      <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        <div><h1 class="titles">New Musics</h1></div>
        <div className="slideBar">
        </div>
      </div>
      <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        <div><h1 class="titles">Top 10 Musics</h1></div>
        <div className="slideBar">
        </div>
      </div>
      <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        <div><h1 class="titles">Top 10 Albums</h1></div>
        <div className="slideBar">
        </div>
      </div>
      <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        <div><h1 class="titles">Top 10 Artists</h1></div>
        <div className="slideBar">
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