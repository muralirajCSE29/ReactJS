import React from "react";
import './super.css';
import rcb from './rcb.jpg';
import csk from './csk.jpg';
import { Routing } from "./Routing";

export function Super()
{
    return(
        <div>
            <Routing/>
        <div className="divsuper">

            <h1  className="h1rcb" >SUPER OVER LEAGUE</h1>

            <div>
                <img src = {rcb} className="rcbimg"/> 

            
                
                <img src = {csk} className="cskimg"/>


            </div>




        </div>

</div>


    );
}

