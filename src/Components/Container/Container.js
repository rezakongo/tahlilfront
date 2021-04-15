import React from "react";
import "./Container.css";
import HomePageAlbum from "../Cards/HomePageAlbum"

function Container(){
    return(
        <div className="containerBody">
            <div className="container contain">
                <div className="row align-items-center ContainerRows">
                    <div className="col-xl-3 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Container;