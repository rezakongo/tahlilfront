import React from 'react'
import './SearchPage.css'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AlbumsSearchCard from "./SearchCard/Albums/AlbumsSearchCard"
import ArtistsSearchCard from "./SearchCard/Artists/ArtistsSearchCard"
import TracksSearchCard from "./SearchCard/Tracks/TracksSearchCard"
import ShowMore from "./ShowMore/ShowMore.js"



const panes = [
  { menuItem: 'Tracks', render: () => <Tab.Pane className="bdy"><div className="itemContainer"><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/></div></Tab.Pane> },
  { menuItem: 'Artists', render: () => <Tab.Pane className="bdy"><div className="itemContainer"><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/></div></Tab.Pane> },
  { menuItem: 'Albums', render: () => <Tab.Pane className="bdy"><div className="itemContainer"><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /></div></Tab.Pane> },
]

function SearchPage(){
  return(
    <div className="tableContainer">
    <div className="tabsStyle">
      <Tab  menu={{ color:"black",fluid: true, vertical: true, tabular: true }} panes={panes}/>
    </div>
    </div>
  );
}

export default SearchPage;

