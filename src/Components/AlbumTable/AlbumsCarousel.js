import React, { Component } from "react";
import Slider from "react-slick";
import AlbumCard from "./AlbumCard";
import "./AlbumsCarousel.css";
export default class AlbumsCarousel extends Component {
  render() {
    const settings = {
      slidesToShow: 5,
      infinite: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 4,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            infinite: false,
            dots: false,
          },
        },
      ],
    };
    return (
      <div>
        <h2
          className="divider line glow"
          contenteditable
          style={{ margin: "20px" }}
        >
          TOP &nbsp; RELEASE
        </h2>
        <div className="CarouselContainerTemplate">
          <div className="CarouselTemplate">
            <Slider {...settings}>
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
