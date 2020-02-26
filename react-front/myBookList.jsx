import React from "react";
import Title from "./title";
import {ho} from "./ho";




const title_fuc=()=>{
    console.log("title_btn_click");
    const title = document.querySelector(".title_btn")

    title.style.color ="red"
}
const img_fuc=()=>{

}
const main_box={
    margin:"0",
    padding:"0",
    width:"100%",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"start",
    alignItems:"center",
    // backgroundImage: "url(../images/wood.jpg)",
    backgroundImage: "url(https://cdn.pixabay.com/photo/2015/06/02/12/59/narrative-794978_1280.jpg)",
    backgroundSize:"cover",
    backgroundPosition:"center center",
    position:"absolute",
    left:"0",
    top:"0",
}

const ulstyle={
    width:"80%",
    height:"100%",
    display:"flex",
    margin:"1rem",
    justifyContent:"center",
    alignItems:"center",
    textAling:"center",
    listStyle:"none",
    zIndex:"1",
    backgroundRepeat: "no-repeat",
    boxShadow: `3px 3px 2px 1px rgba(0,0,0,0.75),
    -2px -2px 5px 1px rgba(0,0,0,0.75)`,
    overflow: "auto",
    overflowY: "hidden",

}
const ma={
    width:"100%",
    zIndex:"2",
}
const books={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"end",

}
const bookSize ={
    cursor: "pointer",
    margin:"1rem",
    width:"7.5rem",
}
const shelf={
    display:"block",
    width:"100%",
    marginTop:"-15vh",
    overflow: "scroll",
}
const library_btn={
    width:"100%",
    display:"flex",
    margin:"15px 25vh 0.7rem 0em ",
    justifyContent:"flex-end",
}

const title_btn={
    margin:"0.3rem",
    cursor:"pointer",
}

const img_btn={
    margin:"0.3rem",
    cursor:"pointer",

}
export default function MyBookList(props){

        return(
            <div className="book_list" style={main_box}>
            <div style={ma}>
            <Title />
            </div>

            <div className="library_form"style={library_btn}>
                
                <button className="title_btn"style={title_btn}  onclick="title_fuc">Title</button>
                <button className="img_btn" style={img_btn} alert="no" >Image</button>
            </div>

            <ul className="list" style={ulstyle}>
                <li style={books}>
                <img src="../images/wood.jpg" style={bookSize} alt=""/>
                <span className="book_name">
                    book_name
                </span>
                {/* <img src={books.imgUrl} className=""book_img/> */}
                </li>


                {/* test ↓*/}
                <li style={books}>
                <img src="../images/wood.jpg" style={bookSize} alt=""/>
                <span className="book_name">
                    book_name
                </span>
                </li>
                <li style={books}>
                <img src="../images/wood.jpg" style={bookSize} alt=""/>
                <span className="book_name">
                    book_name
                </span>
                </li>
            
                <li style={books}>
                <img src="../images/wood.jpg" style={bookSize} alt=""/>
                <span className="book_name">
                    book_name
                </span>
                </li>
                <li style={books}>
                <img src="../images/wood.jpg" style={bookSize} alt=""/>
                <span className="book_name">
                    book_name
                </span>
                </li>
                {/* test ↑ */}

                
            </ul>
            <div>
                <img style={shelf} src="../images/shelf.png" alt=""/>
            </div>

            <ul className="list" style={ulstyle}>
                <li style={books}>
                <img src="../images/wood.jpg" style={bookSize} alt=""/>
                <span className="book_name">
                    book_name
                </span>
                {/* <img src={books.imgUrl} className=""book_img/> */}
                </li>

                <li style={books}>
                <img src="../images/wood.jpg" style={bookSize} alt=""/>
                <span className="book_name">
                    book_name
                </span>
                </li>

            </ul>
            <div>
                <img style={shelf} src="../images/shelf.png" alt=""/>
            </div>


            <div className="list"></div>
            <div className="list"></div>
            <div className="list"></div>
            <style jsx>{`
        html, body {
          margin: 0;
          padding:0;
        }
      `}</style>  
        </div>
        );
    }
    