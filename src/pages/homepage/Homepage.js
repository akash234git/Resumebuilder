import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Intro from '../../components/intro/Intro'
import Cards from "../../components/cards/Cards";
 import Info from '../../components/info/Info';



export default function homepage() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Cards />
            <Info />

            
        </div>
    )
}
