import React from "react";
import Title from "./title";


const style={
    display:"inline-block",
    alignItems:"center",
    margin:"1rem",
    padding:"0",


}
const book_info={
    display:"felx",
    flexDirectionL:"column",
    alignItems:"center",
    justifyContent:"center",
    padding:"0",
    margin:"0",

}
const imgSize={
    width:"30vh",
}


class search extends React.Component{
    render(){
        const results = this.props.results
        console.log(results)
        const resultScreen = results.map( books => {
            return (
             <React.Fragment>
            <div className="search_list" style={style}>

                <ul className="book_info" style={book_info}>
                    <img src={books.imageUrl} style={imgSize}/>
                    <h1>{books.title}</h1>                                                                                                                                                                                                                                                                                                                                       
                    <h3>{books.author}</h3>
                </ul>
            </div>
            </React.Fragment>   
            )
        })
        
        return (
        // console.log(resultScreen),
        <div>
            <Title/>
            <h1>{results[0].terms[0]} 검색결과 : </h1>
            {resultScreen} 
        </div>
        
        );
    
}
}

// class search extends React.Component {
//     render() {
//         const results = this.props.results
//         console.log(results)
//         const resultScreen = results.map((books) => {
//             return (
//                 <React.Fragment>
//                     <img src={books.imageUrl} />
//                     <h1>{books.title}</h1>
//                     <h3>{books.author}</h3>
//                 </React.Fragment>
//             )
//         })

//         return (
//             console.log(resultScreen),
//             <div>
//                 <h1>{results[0].terms[0]} 검색결과 : </h1>
//                 {resultScreen}
//             </div>

//         );

//     }
// }
export default search;