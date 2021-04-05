import React from 'react'
import './Item.css'


function Item(){
    return(
        <div>
            <div class="container-fluid !direction !spacing ">
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} Bod">
                    <div class="col-md-4 col-sm-12 ">
                        <img></img>
                    </div>
                    <div class="col-md-2 col-sm-12  Music">
                        Music
                    </div>
                    <div class="col-md-2 col-sm-12 Artist">
                        Artist
                    </div>
                    <div class="col-md-2 col-sm-12 Year">
                        2007
                    </div>
                    <div class="col-md-2 col-sm-12 Rate">
                        3.8
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Item