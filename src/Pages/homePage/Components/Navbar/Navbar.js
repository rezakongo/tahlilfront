import "./Navbar.css"
import Queen from "./Queen.jpg"
import slash from "./slash.png"
import acount from "./acount.png"
import ham from "./ham.png"

function Navb(){
    return(
        <div className="Navbar">
            <nav className="menu"  class="navbar-expand-lg menu fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={ham} class="pic"></img>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">Hex Beat</a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="menuItem nav-link " aria-current="page" href="#">Artists</a>
                            </li>
                            <li class="nav-item">
                                <a class="menuItem nav-link " aria-current="page" href="#">Albums</a>
                            </li>
                            <li  class=" dropdown  d-flex">
                                <a  class="menuItem nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Year
                                </a>
                                <ul class="dbox dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dboxItem dropdown-item" href="#">2007</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2008</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2009</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2010</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2011</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2012</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2013</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2014</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2015</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2016</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2017</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2018</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2019</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2020</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">2021</a></li>
                                </ul>
                            </li>
                            <li  class=" dropdown  d-flex">
                                <a  class="menuItem nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genres
                                </a>
                                <ul class="dbox dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dboxItem dropdown-item" href="#">Pop</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Rap</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Hiphop</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Metal</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">rap</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Classic</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Pop</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Rap</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Hiphop</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Metal</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">rap</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Classic</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Pop</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Rap</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Hiphop</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Metal</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">rap</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">Classic</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input className="searchBar"  type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn but btn-outline-success" type="submit">Search</button>
                            <li className="menuItem" class="dropdown  d-flex">
                                <a  class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="pic" src={acount}></img>
                                </a>
                                <ul class="dbox dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dboxItem dropdown-item" href="#">Login</a></li>
                                    <li><a class="dboxItem dropdown-item" href="#">SignUp</a></li>
                                </ul>
                            </li>
                        </form>
                    </div>
                </div>
            </nav>
            <div  id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slash} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={Queen} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                      <img src={slash} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>  
    );
}

export default Navb