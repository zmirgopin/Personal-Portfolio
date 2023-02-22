/**
 * code attribution
 * Title: footer.js
 * Author: Zahava Gopin 
 * Date: 22 February 2023
 * Description: JS file creating the footer component to implement in every page of the portfolio
 */
"use strict";
class Footer extends HTMLElement{
    constructor(){
        super();
    }
//all of the links included in the header
    connectedCallback(){
        this.innerHTML = `
        <div id= "footer">
            <p>
            Copyright &copy; 2023 
            <a href = "https://github.com/zmirgopin?tab=repositories"  target="_blank">My GitHub repositories</a>
            <a href = "#"  target="_blank">My Bellevue University Web Development Degree</a>
            <a href = "https://github.com/buwebdev"  target="_blank">Bellevue University Web Development GitHub Repositories</a>
            <a href = "#"  target="_blank">My Bellevue University Web Development YouTube Channel</a>
            </p>
        </div>
        `;
    }
}
//Defining footer as footer-component
customElements.define("footer-component", Footer);