import React from "react";
import "./Profile.css";

function Profile(){
    return(
        <div>
            <div className="container-fluid !direction !spacing Contain">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowOne">
                    <div className="col-md-12  topContain">

                            <div className="col-md-2 topCol">
                                <div className="imgContainer"></div>
                            </div>
                            <div className="col-md-2 topCol">
                            <div className="dataContainer">
                                    wferfreg
                                </div>
                            </div>
                            <div className="col-md-4 topCol">
                                
                            </div>
                            <div className="col-md-4 topCol">
                                <div className="scoreContainer"></div>
                            </div>

                    </div>
                </div>
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <div className="col-md-8  colone">
                        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} leftContain">
                            
                        </div>
                    </div>
                    <div className="col-md-4  coltwo">
                        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;