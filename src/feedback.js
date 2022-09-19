import React from "react";
import './feedback.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile,faFaceAngry,faFaceSadTear} from '@fortawesome/free-solid-svg-icons';
import { Routing } from "./Routing";
import {Link} from 'react-router-dom';

export function Feedback ()
{
    return(
        <div>
            <Routing/>
            
        <div className="div1" >
            <div className="div2" >
                <h1 className="h1" >How Satisfied are you with our customer 
                    Support Performance?
                </h1>
               <Link to ='/Feedback1'> <FontAwesomeIcon icon={faSmile} className="smile" /></Link>
                <Link to ='/Feedback1'> <FontAwesomeIcon icon={faFaceSadTear} className="smile" /></Link>
               <Link to ='/Feedback1'> <FontAwesomeIcon icon={faFaceAngry} className="smile" /></Link>
                <span className="span1">
                <h1 className="h1msg" >Happy</h1>
                <h1 className="h1msg2" >Sad</h1>
                 <h1 className="h1msg3">Not!Happy</h1> 


                </span>
                




            </div>
            </div>





        </div>








    );
}