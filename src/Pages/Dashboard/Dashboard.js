import "./Dashboard.css";
import { Data } from "./Data";
import Header from "./Header.js";
import Playlist from "./Playlist";
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="bg">
        <div id="search">
          <SearchInput />
          <SearchResult playlist={Data} />
        </div>
        <div id="listened-music">
          <p>Listened Music</p>
        </div>
        <div id="collection">
          <p>Collection</p>
        </div>
      </div>
      <div className="right-part">
        <p className="title">Latest Music</p>
        <div id="latest-music">
          <Playlist id="playlist" playlist={Data} />
        </div>
        <p className="title">Favourite</p>
        <div id="favourite">
          <Playlist id="playlist" playlist={Data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
