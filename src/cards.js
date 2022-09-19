import React from "react";
import './cards.css';
import html from './htmlimg.jpg';
import css from './cssimg.jpg';
import js from './jsimg.jpg';
import mys from './mysqlimg.jpg';
import { Routing } from "./Routing";

export function Cards()
{
    return(
        <div>
            <Routing/>
        <h1 className="h1cards" >FULLSTACK DEVELOPMENT</h1>

        <h2 className="h2cards" >A full stack web developer is a person who can develop both 
                                 client and server software.In addition to mastering HTML and CSS, 
                                 he/she also knows how to: Program a browser
                                 like using (JavaScript, jQuery, Angular, or Vue) 
                                 Program a server (like using PHP, ASP, Python, or Node)</h2>

        <div className="div1cards" >
            <h1>HTML</h1>
            <p className="h2html" >The HyperText Markup Language or HTML is the standard markup language 
                for documents designed to be displayed in a web browser. 
                It can be assisted by technologies such as Cascading Style Sheets and scripting languages 
                such as JavaScript.</p>
                <img src = {html} className="imghtml" />


                  <div className="div2cards" >
                    <h1>CSS</h1>
                    <p className="h2html" >Cascading Style Sheets is a style sheet language used for describing the 
                        presentation of a document written in a markup language such as HTML or XML. 
                        CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                        <img src = {css} className="imgcss" />



        </div>

        <div className="div3cards" >
            <h1>JavaScript</h1>
            <p className="h2html" >JavaScript, often abbreviated to JS, is a programming language that is one of the core technologies
               of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side 
               for webpage behavior, often incorporating third-party libraries.</p>
               <img src = {js} className="imgjs" />




        <div className="div4cards" >
            <h1>MySQL</h1>
            <p className="h2html" >MySQL is an open-source relational database management system. Its name is a combination of "My", 
                the name of co-founder Michael Widenius's daughter My, and "SQL", 
                the abbreviation for Structured Query Language.</p>
                <img src = {mys} className="imgmysql" />


        </div>
        </div>
        </div>
            
            






        </div>
    );
}