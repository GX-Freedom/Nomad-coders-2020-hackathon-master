import React from "react";
import user from "../model/user";


function ho() {

    const Home = pug.complieFile("Home.pug");

    const ul = document.createElement("ul");
    const li = document.createElement("li");

    const divs = document.querySelector(".container");



    divs.appendChild(ul)
    ul.appendChild(li)
    ul.className = "booklist"
    li.className = "booklist_more"
    li.innerHTML = "bookList";

    return (
        <div className="ss">
            <h1>wow</h1>,
         </div>

    );
}



export default ho; 