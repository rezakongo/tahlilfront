import React, { Component } from "react";
import Slider from "react-slick";
import "./ArtistsCarousel.css"
import HomePageArtist from "./Cards/homePageArtist"

export default class ArtistsCarousel extends Component {
  render() {
    const settings = {
        slidesToShow: 3,
        infinite: true,
        dots:false,
      responsive: [
        
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                infinite: true,
                dots:false,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots:false,
            }
        },
      ]
    };
    return (
        <div className="CarouselContainerTemplate">
            <div className="CarouselTemplate">
                <h2> Artists</h2>
                <Slider {...settings} >
                <div>
                    <HomePageArtist></HomePageArtist>
                </div>
                <div>
                    <HomePageArtist></HomePageArtist>
                </div>
                <div>
                    <HomePageArtist></HomePageArtist>
                </div>
                <div>
                    <HomePageArtist></HomePageArtist>
                </div>
                <div>
                    <HomePageArtist></HomePageArtist>
                </div>
                <div>
                    <HomePageArtist></HomePageArtist>
                </div>
                </Slider>
            </div>
        </div>
    );
  }
}