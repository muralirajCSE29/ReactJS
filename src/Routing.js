import React from "react";
import './Routing.css';
import {Link} from 'react-router-dom';


export function Routing()
{
    return(
        <div>
            
        <nav>
            <ul>
           <Link to ="/"> <li>Hello</li>    </Link>
           <Link to ="/congrats">    <li>Congrats Card</li> </Link>
           <Link to ="/super">     <li>Super Over League</li> </Link>
           <Link to ="/cards">   <li>Technology Cards</li> </Link>
           <Link to ="/Fruits">   <li>Fruits Count</li> </Link>
           <Link to ="/Feedback">   <li>Feedback</li> </Link>


           



            </ul>
        </nav>
</div>








    );
}