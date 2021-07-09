import axios from "axios";
import React, { Component } from "react";
import Navbar from "../../Components/Navbar/navbar";
import GenreCards from "./GenreCards/GenreCards";
import { Pagination } from "semantic-ui-react";
import { Loader } from "semantic-ui-react";

import "./Genres.css";

class Genres extends Component {
  state = {
    GenreTitles: [],
    activePage: 1,
    changePage: false,
    loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({loading:true});
    axios
      .get(
        `http://127.0.0.1:8000/api/page/GenreAPIView/?limit=12&page=${this.state.activePage-1}`
      )
      .then((res) => {
        console.log(res.data);

        this.setState({ GenreTitles: res.data.results, loading: false });
      });
  };

  render() {
    var handlePaginationChange = (e, { activePage }) => {
      this.setState({ activePage });
      this.setState({ activePage });
      console.log(this.state.activePage);
      this.fetchData();
    };
    return (
      <div>
        <Navbar activeItem="Genres" menuId="menu2" />
        <div className="pgBdy">
          
          <div className="container-fluid !direction !spacing cardsPosition">
          {this.state.loading ?  <Loader content="Loading" size="large" inverted />:
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} genrepr">
              {this.state.GenreTitles.map((genres) => {
                return (
                  <div class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <GenreCards genre={genres} />
                  </div>
                );
              })}
          
            </div>
          }
            
          </div>
          
        </div>
        <Pagination
              activePage={this.state.activePage}
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              inverted
              totalPages={10}
              id={
                this.state.loading1 ||
                this.state.loading2 ||
                this.state.loading3
                  ? "hidden"
                  : "pagination"
              }
              onPageChange={handlePaginationChange}
            />
      </div>
    );
  }
}

export default Genres;
