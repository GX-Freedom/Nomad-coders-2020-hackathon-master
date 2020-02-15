import React from "react";
import pug from "react-pug";
import Login from "./Login";
import Index from "./index";
import Header from "./Header";

//const Ho = pug.compileFile("home.pug");

function Home(props){

    //ReactDOM.render(<Join/>, document.getElementById("root"));
     return  (console.log(props), <Header/>);
}

export default Home;