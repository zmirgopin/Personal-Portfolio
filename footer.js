"use strict";
class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div id= "footer">
            <p>
            Copyright &copy; 2023 
            <a href = "https://github.com/zmirgopin?tab=repositories">My GitHub repositories</a>
            <a href = "#">My Bellevue University Web Development Degree</a>
            <a href = "https://github.com/buwebdev">Bellevue University Web Development GitHub Repositories</a>
            <a href = "#">My Bellevue University Web Development YouTube Channel</a>
            </p>
        </div>
        `;
    }
}
customElements.define("footer-component", Footer);