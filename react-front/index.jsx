import React from "react";
import routes from "../routes";
import user from "../model/user";

//const Home = pug.complieFile("Home.pug");

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
            
        </div>

    );
}

function Search(){
    <form>
        <input type="text"  action={routes.search}></input>
        <button value="button">button </button>

    </form>

}

class index extends React.Component{

    render(){ return Header();
    }
}

 export default index;