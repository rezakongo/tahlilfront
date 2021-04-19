import React from 'react'
import './SearchPage.css'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AlbumsSearchCard from "./SearchCard/Albums/AlbumsSearchCard"
import ArtistsSearchCard from "./SearchCard/Artists/ArtistsSearchCard"
import TracksSearchCard from "./SearchCard/Tracks/TracksSearchCard"
import ShowMore from "./ShowMore/ShowMore.js"



const panes = [
  { menuItem: 'Tracks', render: () => <Tab.Pane className="bdy"><div className="itemContainer"><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><ShowMore/></div></Tab.Pane> },
  { menuItem: 'Artists', render: () => <Tab.Pane className="bdy"><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ShowMore/></Tab.Pane> },
  { menuItem: 'Albums', render: () => <Tab.Pane className="bdy"><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><AlbumsSearchCard /><ShowMore/></Tab.Pane> },
]

function SearchPage(){
  return(
    <div className="tableContainer">
    <div className="tabsStyle">
      <Tab  className="bdy" menu={{ fluid: true, vertical: true, tabular: true }} panes={panes}/>
    </div>
    </div>
  );
}

export default SearchPage;

