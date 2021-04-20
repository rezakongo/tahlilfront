import React from "react"
import {Button, Segment } from "semantic-ui-react"
import "./ShowMore.css"

function ShowMore(props){
    return(
        <div>
                <Button color='black' className="buttonStyle" href={props.link}>ShowMore</Button>
        </div>
    )
}

export default ShowMore;