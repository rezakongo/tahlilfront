import React, { Component } from "react";
import Slider from "react-slick";
import "./ArtistsCarousel.css"
import HomePageArtist from "../Cards/homePageArtist"

export default class ArtistsCarousel extends Component {
  render() {
    const settings = {
        slidesToShow: 3,
        infinite: true,
        dots:false,
      responsive: [
        
        {
            breakpoint: 1450,
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
                <Slider {...settings} >
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                <div className="Cells">
                    <HomePageArtist/>
                </div>
                </Slider>
            </div>
        </div>
    );
  }
}