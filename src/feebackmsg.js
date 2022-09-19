import React from "react";
import './feedback.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { Routing } from "./Routing";

export function Feedbackmsg ()
{
    return(

        <div>
            <Routing/>

        <div  className="div1" >


            <div className="div2">

                <FontAwesomeIcon icon={faHeart} className="heart" />
                <h1 className="h1heart" >Thank You!</h1>
                <p className="pheart" ><b>We will use your feedback to improve our customer
                    support performance</b>
                </p>




            </div>
        </div>

        </div>









    );

}