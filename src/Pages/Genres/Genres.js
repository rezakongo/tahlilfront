import React,{Component} from 'react';
import Navbar from "../../Components/Navbar/navbar";
import GenreCards from "./GenreCards/GenreCards";
import "./Genres.css";


class Genres extends Component{
    render(){
        const GenreTitles=[
            {
                title:"Rock",
                description:"Rock music is a broad genre of popular music that originated as rock and roll in the United States in the late 1940s and early 1950s, developing into a range of different styles in the mid-1960s and later, particularly in the United States and the United Kingdom.",
            },
            {
                title:"Heavy metal",
                description:"Heavy metal is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States.",
            },
            {
                title:"Country music",
                description:"Country is a genre of popular music that originated with blues, old-time music, and various types of American folk music including Appalachian, Cajun, Creole, and the cowboy Western music styles of New Mexico, Red Dirt, Tejano, and Texas country.",
            },
            {
                title:"Punk rock",
                description:"Punk rock is a music genre that emerged in the mid-1970s. Rooted in 1960s garage rock, punk bands rejected the perceived excesses of mainstream 1970s rock.",
            },
            {
                title:"House music",
                description:"House is a genre of electronic dance music characterized by a repetitive four-on-the-floor beat and a typical tempo of 120 to 130 beats per minute.",
            },
            {
                title:"Disco",
                description:"Disco is a genre of dance music and a subculture that emerged in the 1970s from the United States' urban nightlife scene. Its sound is typified by four-on-the-floor beats, syncopated basslines, string sections, horns, electric piano, synthesizers, and electric rhythm guitars. ",
            },
            {
                title:"Alternative rock",
                description:"Alternative rock is a category of rock music that emerged from the independent music underground of the 1970s and became widely popular in the 1990s. Alternative refers to the genre's distinction from mainstream or commercial rock or pop music.",
            },
            {
                title:"Dubstep",
                description:"Dubstep is a genre of electronic dance music that originated in South London in the late 1990s. It is generally characterised by sparse, syncopated rhythmic patterns with prominent sub-bass frequencies.",
            },
            {
                title:"World",
                description:"World music is a musical category encompassing many different styles of music from around the world, including traditional music, quasi-traditional music, and music where more than one cultural tradition intermingles.",
            },
            {
                title:"Swing music",
                description:"Swing music is a form of jazz that developed in the United States in the 1930s and 1940s. The name came from the emphasis on the off–beat, or weaker pulse. Swing bands usually featured soloists who would improvise on the melody over the arrangement.",
            },
            {
                title:"New wave",
                description:"New wave is a broad music genre that encompasses numerous pop and rock styles from the late 1970s and the 1980s. It was originally used as a catch-all for the music that emerged after punk rock, including punk itself, but may be viewed retrospectively as a more accessible counterpart of post-punk.",
            },
            {
                title:"Progressive rock",
                description:"Progressive rock is a broad genre of rock music that developed in the United Kingdom and United States throughout the mid- to late 1960s. ",
            },
        ]
        
        return(
            <div>
                <Navbar activeItem=""  menuId="menu2"/>
                <div className="pgBdy">
                    <div className="container-fluid !direction !spacing cardsPosition">
                        <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                            {GenreTitles.map((genres)=>{
                                return(
                                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                    <GenreCards genre={genres}/>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Genres;