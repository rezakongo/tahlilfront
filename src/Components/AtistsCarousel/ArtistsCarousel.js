import React, { Component } from "react";
import Slider from "react-slick";
import "./ArtistsCarousel.css";
import HomePageArtist from "../Cards/homePageArtist";
import axios from 'axios';



export default class ArtistsCarousel extends Component {

  state={

  }





  render() {
    const settings = {
      slidesToShow: 3,
      infinite: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 2,
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
      <div className="CarouselContainerTemplate">
        <div className="CarouselTemplate">
          <Slider {...settings}>
            {this.props.Rtist.map(Artist => <div className="Cells"><HomePageArtist artistt={Artist}/></div>)}
          </Slider>
        </div>
      </div>
    );
  }
}
