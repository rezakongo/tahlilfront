
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Navbar'

function HomePage() {
  
  return (
    <div>
    <Nav></Nav>
    <div className="bdy" class="container" >
      <div className="slideContainer" class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        <div className="slideBar">
          SlideShow
        </div>
      </div>
      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        <div class="col-md-3 col-sm-6 col-xs-12">
        <div className="Tops">
              Top10 Musics
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
        <div className="Tops">
              Top10 Musics
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
        <div className="Tops">
              Top10 Musics
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
        <div className="Tops">
              Top10 Musics
            </div>
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