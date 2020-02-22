import React from "react";
import routes from "../routes";
import user from "../model/user";
import Header from "./Header";

// const ul = document.createElement("ul");
// const li = document.createElement("li");



function container(){

    ul.appendChild(li);
    ul.className = "booklist";
    li.className = "booklist_more";
    li.innerHTML="bookList";
    const divs = document.querySelector(".container");
    divs.appendChild(ul);


    return (
        <div className="container">
            <ul>
                <li className="not_yet">booklist</li>
                <li className="not_yet">booklist</li>
            </ul>
        </div>

    );
}

function Search(){
    <form>
        <input type="text"  action={routes.search}></input>
        <button value="button">button </button>

    </form>

}

export default function index(){
    return container;
}