import React,{Component} from 'react'
import { Icon, Input } from "semantic-ui-react";
import axios from 'axios'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AlbumsSearchCard from "./SearchCard/Albums/AlbumsSearchCard"
import ArtistsSearchCard from "./SearchCard/Artists/ArtistsSearchCard"
import TracksSearchCard from "./SearchCard/Tracks/TracksSearchCard"
import Navbar from "../../Components/Navbar/navbar"

import "./SearchPage.css"
import Orbs from "./orbs.gif"





class SearchPage extends React.Component{
  state = {
    Artists: [],
    Albums:[],
    Tracks:[],
    searchField:'sia'
  }


  componentDidMount() {
    
    axios.get(`http://127.0.0.1:8000/api/page/ArtistSearchAPIView/?format=json&search=`+this.state.searchField)
      .then(res => {
        for(var c in res.data){
        const Artists =res.data.c;
        this.setState({ Artists });
        }
      })
  
  }


  
  render(){
      const handleChange = e => {
        const inputValueToUrl = encodeURI(e.target.value); 
        this.state.searchField=inputValueToUrl;
        this.componentDidMount();
      }
        return(
          <div className="Container">
            <Navbar activeItem="" menuId="menu1"></Navbar>
            <div className="container-fluid !direction !spacing totalContainer">
              <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
              </div>
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} SearchTop">
             
                <div className="col-md-0">
                </div>
                <div className="col-md-5 tit">
                  300 Results(100 Albums,100 Artists,100 Tracks)
                </div>
                <div className="col-md-3 ">
                </div>
                <div className="col-md-3">
                <Input
                  icon={<Icon name="search" id="iconColor" inverted circular link />}
                  placeholder="Search..."
                  className="searchBar"
                  id="searchBarRadius"
                />
                </div>
                <div className="col-md-1 ">

                </div>
                
              </div>
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bodyContain">
            
                <div className="col-md-2 d-flex align-items-start tabsContainer">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button className="nav-link active tabs" id="v-pills-Tracks-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Tracks" type="button" role="tab" aria-controls="v-pills-Tracks" aria-selected="true">Tracks</button>
                  <button className="nav-link tabs" id="v-pills-Albums-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Albums" type="button" role="tab" aria-controls="v-pills-Albums" aria-selected="false">Albums</button>
                  <button className="nav-link tabs" id="v-pills-Artists-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Artists" type="button" role="tab" aria-controls="v-pills-Artists" aria-selected="false">Artists</button>
                </div>
                </div>
                <div className="col-md-9 tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active tabsBody" id="v-pills-Tracks" role="tabpanel" aria-labelledby="v-pills-Tracks-tab">
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                    <TracksSearchCard/>
                  </div>
                  <div className="tab-pane fade tabsBody" id="v-pills-Albums" role="tabpanel" aria-labelledby="v-pills-Albums-tab">
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                    <AlbumsSearchCard/>
                  </div>
                  <div className="tab-pane fade tabsBody" id="v-pills-Artists" role="tabpanel" aria-labelledby="v-pills-Artists-tab">
                    {this.state.Artists.map(Artist=><ArtistsSearchCard Artist={Artist}/>)}
                  </div>
                </div>
                <div className="col-md-1">
                    
                </div>
              </div>
            </div>
          </div>
  );
  }
}

export default SearchPage;

