import "./Menu.css"
import acount from "./acount.png"
import ham from "./ham.png"

function Menu(){
    return(
        <nav className="menu"  class="navbar-expand-lg menu fixed-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <img src={ham} class="pic"></img>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Hex Beat</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="menuItem nav-link " aria-current="page" href="Artists">Artists</a>
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
                    <a href="#login"  class="pic d-flex nav-link" ><img src={acount}></img></a>
                </form>
            </div>
        </div>
    </nav>
    )
}

export default Menu