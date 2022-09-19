import React from "react";
import img from './cong1mg.jpg';
import './congrats.css';
import img1 from './mainimgcon.jpg';
import img2 from './img2con.jpg';
import { Routing } from "./Routing";



export function Cong()
{
    return(
        <div>
            <Routing/>
        <div className="congbimg" >
            <h1 className="h1con" >Congratulations</h1>
            <div className="div1con">
                <img src = {img1} className="mainimg" />
                <h2 className="h2con" >Kiran V</h2>
                <h2 className="h2con" >Vishnu Institute of Computer Education and Technology Bhimavaram</h2>
                <img src = {img2} className="mainimg1"/>


            </div>
            

            

        </div>

        </div>




    );
}