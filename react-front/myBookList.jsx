import React from "react";
import Title from "./title";

const main_box={
    margin:"0",
    padding:"0",
    width:"100%",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
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
    width:"30%",
    height:"20%",
    display:"flex",
    margin:"1rem",
    justifyContent:"center",
    alignItems:"center",
    listStyle:"none",
    zIndex:"1",
}
const ma={
    margin:"0",
    zIndex:"2",
    left:"10px",
    marginTop:"-30px",

    display:"flex",


}
export default function MyBookList(props){

        return(
            <div className="" style={ma}>
            <div className="book_list" style={main_box}>
            <Title style={ma}/>
            <ul className="list" style={ulstyle}>
                <span className="book_name">
                    book_name
                </span>
                {/* <img src={books.imgUrl} className=""book_img/> */}
            </ul>
            <div className="list"></div>
            <div className="list"></div>
            <div className="list"></div>
        </div>
    </div>
        );
    }
    
    // })
    // return(
        

    //     <div className="book_list">
    //         <div className="list">
    //             <img src={bookimg.imgUrl} className=""book_img/>
    //         </div>
    //         <div className="list">wow</div>
    //         <div className="list"></div>
    //         <div className="list"></div>
    //     </div>

    // );
