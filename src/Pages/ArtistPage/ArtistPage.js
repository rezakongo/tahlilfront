import React, { Component } from "react";
import AlbumTable from "../../Components/AlbumTable/AlbumTable";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import "./ArtistPage.css";
import eminem from './eminem.jpg';

class ArtistPage extends Component {
  render() {
    var sectionStyle = {
      width: "100%",
      height: "25rem",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url(https://content.api.news/v3/images/bin/ba49fee5bc802f0a32a9415fef635f71)",
    };
    return (
      <div>
        <Navbar activeItem="artist" menuId="menu2" />
        <div class="container-fluid !direction !spacing artistPageContainer">
          <div style={sectionStyle} class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} artistDataPosition">
              <div class="col-xl-3 imgContainer">
                  <img width="280" height="280" className="imgkhodesh"  src="https://content.api.news/v3/images/bin/ba49fee5bc802f0a32a9415fef635f71"/>
              </div>
              <div class="col-xl-4">
                  <div class="container-fluid !direction !spacing dataContainer">
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titleContainer">
                      Eminem
                    </div>
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                    1988–present
                    </div>
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                      <img height="40" className="imgflag" src={"https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"}/>
                    </div>
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                      <button className="followButton">Follow</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bdyContainer">
            <div class="container-fluid !direction !spacing bdyPosition">
              <AlbumTable />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ArtistPage;
