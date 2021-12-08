import React from 'react'
import "./info.css";
import { Link } from 'react-router-dom';

export default function Info() {
    return (
        <div className="info">
            <div className="left">
                <h3><b>Build a perfectly formatted resume in minutes</b></h3>
                <p>Avoid hours of online research and wasted time 
                    playing with margins in Microsoft Word and let our resume generator make a resume 
                    for you. We guide you through creating each resume section step-by-step — you just need to fill in the
                     blanks. With our online resume builder, you can create a resume that showcases 
                     your greatest strengths and unique professional and educational experiences.
                </p>
                <Link className="info-btn" to="/signUp">
                   <b> Build Resume</b>
                </Link>
            </div>
            <div className="right">
                <img className="info-image" src="https://image.shutterstock.com/image-photo/resume-phone-laptop-on-wooden-260nw-611593157.jpg"
                alt=""/>
            </div>
        </div>
    )
}
