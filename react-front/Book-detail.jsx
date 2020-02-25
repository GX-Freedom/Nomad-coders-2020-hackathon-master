import React from "react";
import Title from "./title";



class bookDetail extends React.Component {
    render(){
        const bookimg = {
            margin:"1rem",
            borderRadius:"10px",
            boxShadow: `2px 2px 2px 0px rgba(0,0,0,0.75),
            1px 2px 3px 3px rgba(0,0,0,0.75)`,
        }
        const title={
            padding:"0.7rem",
            border:"1px solid red",
            width:"50%",
            borderRadius:"10px",
            boxShadow: `2px 2px 2px 0px rgba(0,0,0,0.75),
            1px 2px 3px 3px rgba(0,0,0,0.75)`,
        }
        const inmargin={
            margin:"10px",
            display:"flex",
            flexDirection:"column",
            width:"100%",
            alignItems:"center",
        }
        const centerBox={
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            fontWeight:"500",
            color:"blue",
        }
        
        const inputstyle ={
        margin: "5px",
        borderRadius:"10px",

        }
        const reviewset={
            margin:"0.8rem",
            textAlign:"center",
        }

        const postReview={
            margin:"5px",
        }

        const reviewStyle={
            boxShadow:` 0.1px 2px 0.5px 0.5px rgba(0,0,0,0.75),
            -0.1px -0.1px 0.5px 0.5px rgba(0,0,0,0.75)`,
            margin:"0.8rem",
            textAlign:"center",
            width:"60%",
        }
        const reimg={
            margin:"0.7rem",
            borderRadius:"100%",
            width:"20%",
        }
        //
            
        
        let totalStar="";

        let totalPoint=()=>{

            if(this.props.totalRate)
            {
                
                for(var i =0; i<this.props.totalRate; i++)
                {
                    totalStar += "★"; 
                }
            }
        }
        totalPoint();

        const book = this.props.book
        console.log(book);
        return(
            
            <React.Fragment>
            
            <Title/>
        <div className="center_box" style={centerBox}>
            <img src={`/${book.imageUrl}`} style={bookimg}/>
            <h1 style={title}>{book.title}</h1>
            <h3>{JSON.stringify(book.createdAt)}</h3>
            <h2>{book.totalRate}</h2>
            <h2>{book.author}</h2>
            <h3>{book.description}</h3>
            <h3>{totalStar}</h3>
            <h3>{this.props.totalRate}점</h3>
        <form action={this.props.routes.editBook(book.id)} method="post" style={inmargin}>
            <input type="text" name="title" placeholder="수정할 이름" value={book.title} style={inputstyle}/>
            <input type="textarea" name="description" placeholder="상세내용" value={book.description}style={inputstyle}/>
            <input type="text" name="author" placeholder="작가 이름" value={book.author}style={inputstyle}/>
            <input type="submit" value="수정하기"/>
        </form>
        <form action={this.props.routes.deleteBook(book.id)} method="post" style={reviewset}>
        <input type="submit" value="책 삭제"/>
        </form>
        <form action={this.props.routes.postReview(book.id)} method="post"style={postReview}>
                <input type="text" name="reviewContent" placeholder="책에 대한 평가를 남겨주세요!"style={postReview}/>
                <input type="number" name="rate" placeholder="평점을 남겨주세요" min={0} max={10} value={5} step={.1}style={postReview}/>
                <input type="submit" value="등록"/>
        </form>
        {/*each item in book.review
            img(src=item.creatorPhoto width="50vh")
            h3 #{item.creator}
            h3 #{item.content}
            h3 #{item.rate}점
        h4 #{item.createdAt}*/}
        {book.review.map( (item) => {
            
        let star="";
        let test=`${<i class="fas fa-star-half-alt"></i>}`;


        const starPoint=()=>{

            if(item.rate)
            {
                for(var i =0; i<item.rate; i++)
                {
                    star += "★";
                }
            }
        }
        starPoint();
        const hours = new Date().getMinutes();

        
                return(
                    <div style={reviewStyle}>
                <img style={reimg} src={item.creatorPhoto}  width="50vh"/>
                <h3>평가자: {item.creator}</h3>
                <h3>리뷰: {item.content}</h3>
                <h3>{star}</h3>
                <h3>{item.rate} 점</h3>
                <h3>{JSON.stringify(item.createdAt)}</h3>
                    <h3>{test}</h3>
                <h3>{hours}</h3>
                </div>
                )
        } )}
        </div>

        </React.Fragment>
        )
    }
}

export default bookDetail