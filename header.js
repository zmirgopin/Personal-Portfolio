"use strict";

class Header extends HTMLElement{
    constructor() {
        super();
    }

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
                    <a href= "about.html">About</a>
                </li>
                <li>
                    <a href= "resume.html">Resume</a>
                </li>
                <li>
                    <a href= "projects.html">Projects</a>
                </li>
                <li>
                    <a href= "#">Database Diagrams</a>
                </li>
                <li>
                    <a href= "#">API Unit Tests</a>
                </li>
            </ul>
        </div>
        `;
    }
}
customElements.define("header-component", Header);