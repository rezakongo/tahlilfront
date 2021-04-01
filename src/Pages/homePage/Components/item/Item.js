import "./Item.css"
import eminem from "./eminem.jpg"

function Item(props){
    return(
        <div class="bod">
            <div class="card">
                <div class="container">
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} r1">
                        
                    </div>
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} r2">
                        <img src={eminem}></img>
                    </div>
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} r3">
                        <div class="titles">8 Miles</div>
                        <div class="disc">Eminem</div>
                        <div class="rate">Rate : 4.6</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item