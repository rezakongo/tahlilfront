import React from "react";
import "./Container.css";
import HomePageAlbum from "./Cards/HomePageAlbum"

function Container(){
    return(
        <div className="containerBody">
            <div className="container-fluid !direction !spacing">
                <div className="row align-items-center ContainerRows">
                    <div className="col-md-4 col-sm-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-md-4 col-sm-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-md-4 col-sm-12 containcells">
                        <HomePageAlbum/>
                    </div>
                </div>
                <div className="row align-items-center ContainerRows">
                    <div  className="col-md-4 col-sm-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-md-4 col-sm-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-md-4 col-sm-12 containcells">
                        <HomePageAlbum/>
                    </div>
                </div>
                <div className="row align-items-center top-buffer ContainerRows">
                    <div  className="col-md-4 col-sm-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-md-4 col-sm-12 containcells">
                        <HomePageAlbum/>
                    </div>
                    <div className="col-md-4 col-sm-12 containcells">
                        
                        <HomePageAlbum/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Container;