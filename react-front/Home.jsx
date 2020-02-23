import React from "react";
import Login from "./Login";
import Header from "./Header";
import Join from "./Login";
import MyBookList from "./MyBookList";
import Recommend from "./Recommend";



// import './index.css';
// import * as serviceWorker from './serviceWorker';


function Home(props){
    {MyBookList(props)}
    console.log(props);

    const style={
        width:"100%",
        margin:"0",
        paddgin:"0",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        backgroundColor:"rgba(107, 26, 184, 0.085)",
        
    }
    const grid = {
        gridColumnStart:"2",
        gridColumnEnd:"3",
        textAlign:"center",
        postion:"relative",

        transformStyle:"preserve-3d",
        perspective:"1200px",
    }

    const img_box={
        borderRadius:"10px",
        boxShadow: `2px 5px 3px 2px rgba(0,0,0,0.75),
        -2px -2px 1px 0px rgba(0,0,0,0.75)`,
        marginTop:"2rem",
        postion:"relative",
        transformStyle:"preserve-3d",
       // transform:"rotateY(45deg)",
        animation:"spin 10s linear infinite"
       
    }
    const underline={
    textDecoration: "none",
    color:"rgba(50, 50, 224, 0.445)",
    }


    const reco={
        display:"grid",
        gridColumnStart:"3",
        gridColumnEnd:"4",
    }
    const tet={
        margin:"0",
    }
    const bookList =

        props.books.map(book => {
            return (
                <div className="booklist_home" style={style}>
                    <div className="grid_box" style={grid}>
                    <a  href={props.routes.bookDetail(book.id)} style={underline}>
                    <img src={book.imageUrl} alt={book.imageUrl} style={img_box}/>
                    <div className="text_box" >
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <h3>{JSON.stringify(book.createdAt)}</h3>
                    <h3>{book.description}</h3>
                    </div>
                    </a>
                    </div>
                    <Recommend style={reco}/>
                </div>
                

                )
            })
            
            //ReactDOM.render(<Join/>, document.getElementById("root"));
    return  ( 
                
    <React.Fragment style={tet}>
        {Header(props)}     
         {bookList}
         
    </React.Fragment>
     );
//const Ho = pug.compileFile("home.pug");

// function Home(props) {

//     //ReactDOM.render(<Join/>, document.getElementById("root"));
//     return (
//         console.log(props), <Index />
//     );
// }
}


// class Home extends React.Component {

//     render() {

//         return (

//             <div id="root">
//                 <Index />
//             </div>
//         );

//     }
// }
// serviceWorker.unregister();

export default Home