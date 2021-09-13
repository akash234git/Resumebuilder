import React from 'react';
import "./intro.css";
import {Link} from "react-router-dom";

export default function Intro() {

    



    return (
        <div>
            <div className="firstHeading">
                <h3>Build Your Resume Online</h3>
                <h1 className="secondHeading">Create Your Resume Within Minutes</h1>
                <Link  className="details-btn" to="/details" variant="contained" color="primary" disableElevation>
               Build Resume
               </Link>
               <img class="resumeImage"src="https://d2vr64fd62ajh5.cloudfront.net/img/cat_headers/free-resume-online-editor-en_4.jpg" alt="">
               </img>
            </div>
            
            
        </div>
    )
}


