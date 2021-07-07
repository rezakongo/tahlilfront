import React,{Component} from "react";
import "./Container.css";
import Slider from "react-slick";
import HomePageAlbum from "../Cards/HomePageAlbum"
import axios from 'axios';


  

export default class Container extends Component {


    state={

      }
    

    
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
        <div className="total">
        <div className="containerBody d-none d-md-block">
            <div className="container contain">
                <div className="row align-items-center ContainerRows">
                    {this.props.Alb.map(Album => <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 containcells">
                        <HomePageAlbum Albm={Album}/>
                    </div>)}
                    <div className="col-xl-2 col-lg-0 col-md-0 d-none d-xl-block d-xxl-none">
                    </div>
                </div>
            </div>
        </div>
        <div className="containerBodyMobile  d-block d-md-none">
        <div className="CarouselContainerTemplate">
              <div className="CarouselTemplate">
                  <Slider {...settings} >
                  {this.props.Alb.map(Album => {
                        <HomePageAlbum Albm={Album}/>
                    })}
                  </Slider>
              </div>
          </div>
        </div>
        </div>
          
      );
    }
  }