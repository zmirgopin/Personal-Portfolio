/**
 * code attribution
 * Title: header.js
 * Author: Zahava Gopin 
 * Date: 22 February 2023
 * Description: JS file creating the header component to implement in every page of the portfolio
 */
"use strict";

class Header extends HTMLElement{
    constructor() {
        super();
    }
//This list is the navigation bar in the header
    connectedCallback(){
        this.innerHTML = `
        <div id = "banner">
           <h1>Zahava Gopin's Personal Portfolio</h1>
        </div>    
        <div id= "nav-container">
            <ul id= "nav-list">
                <li><a href="#"></a></li>
                <li>
                <a href="index.html">Home</a>
                </li>
                <li>
                    <a href= "about.html" >About</a>
                </li>
                <li>
                    <a href= "resume.html">Resume</a>
                </li>
                <li>
                    <a href= "projects.html">Projects</a>
                </li>
                <li>
                    <a href= "database.html">Database Diagrams</a>
                </li>
                <li>
                    <a href= "api.html">API Unit Tests</a>
                </li>
            </ul>
        </div>
        `;
    }
}
//Defined as the header-component
customElements.define("header-component", Header);