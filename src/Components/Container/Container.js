import React from "react";
import "./Container.css";
import HomePageAlbum from "../Cards/HomePageAlbum"

function Container(){
    return(
        <div className="containerBody">
            <div className="container contain">
                <div className="row align-items-center ContainerRows">
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 containcells">
                        <HomePageAlbum/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Container;