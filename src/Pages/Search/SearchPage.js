import React from 'react'
import './SearchPage.css'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AlbumsSearchCard from "./SearchCard/Albums/AlbumsSearchCard"
import ArtistsSearchCard from "./SearchCard/Artists/ArtistsSearchCard"
import TracksSearchCard from "./SearchCard/Tracks/TracksSearchCard"



const panes = [
  { menuItem: 'Tracks', render: () => <Tab.Pane ><div className="itemContainer"><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/><TracksSearchCard/></div></Tab.Pane> },
  { menuItem: 'Artists', render: () => <Tab.Pane ><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/><ArtistsSearchCard/></Tab.Pane> },
  { menuItem: 'Albums', render: () => <Tab.Pane ><AlbumsSearchCard /></Tab.Pane> },
]

function SearchPage(){
  return(
    <div className="tabsStyle">
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes}/>
    </div>
  );
}

export default SearchPage;

