import React, { Component } from "react";
import Slider from "react-slick";
import "./ArtistsCarousel.css"

export default class ArtistsCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <div className="CarouselContainerTemplate">
            <div className="CarouselTemplate">
                <h2> Artists</h2>
                <Slider {...settings} >
                <div>
                    <h3 className="ArtistsCardContainer">1</h3>
                </div>
                <div>
                    <h3 className="ArtistsCardContainer">2</h3>
                </div>
                <div>
                    <h3 className="ArtistsCardContainer">3</h3>
                </div>
                <div>
                    <h3 className="ArtistsCardContainer"></h3>
                </div>
                <div>
                    <h3 className="ArtistsCardContainer">5</h3>
                </div>
                <div>
                    <h3 className="ArtistsCardContainer">6</h3>
                </div>
                </Slider>
            </div>
        </div>
    );
  }
}