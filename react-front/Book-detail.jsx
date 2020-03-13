 import React from "react";
import { BaseLayout } from "./globalStyles/layout";
import Title from "./title";
import Header from "./globalStyles/Header";
import GlobalStyle from "./globalStyles/ResetCss";
import styled, { keyframes } from "styled-components";

class bookDetail extends React.Component {

    render() {
        const user = this.props.user;
        const book = this.props.book;
        const routes = this.props.routes;
        function CheckUser() {

            if (user && user.id == book.enrolledBy[0]._id) {
                return (
                    <>
                        <form action={routes.editBook(book.id)} method="post">
                            <input type="text" name="title" placeholder="수정할 이름" value={book.title} />
                            <textarea name="description" placeholder="상세내용" value={book.description} />
                            <input type="text" name="author" placeholder="작가 이름" value={book.author} />
                            <input type="submit" value="수정하기" />
                        </form>
                        <form action={routes.deleteBook(book.id)} method="post">
                            <input type="submit" value="책 삭제" />
                        </form>
                    </>
                )

            } else if (user) {
                
                return (
                    <>
                        <form action={`/${routes.myBookList(book.id)}`} method="post">
                            <input type="submit" value="내 서재에 놓기" />
                        </form>
                    </>
                )
            }

            else {
                return ""
            }
        }

        function ActivateReview() {
            if (user) {
                return (
                    <form action={routes.postReview(book.id)} method="post">
                        <InputReview type="textarea" name="reviewContent" placeholder="책에 대한 평가를 남겨주세요!"  rows="1" />
                        <InputRate type="number" name="rate" placeholder="평점을 남겨주세요" min={0} max={10} value={0} step={.1} />
                        <ReviewSubmit type="submit" value="등록" />
                    </form>
                )
            }
            return "";
        }

        function UserWhoRated(review) {
            if (user && review.email == user.email) {
                return (
                    <form action={routes.deleteRate(review.id)} method="post">
                        <input type="submit" value="삭제" />
                    </form>
                )
            }
        }

        let totalStar = "";

        let totalPoint = () => {

            if (this.props.totalRate) {

                if (this.props.totalRate / parseInt(this.props.totalRate) >= 1.1) {
                    for (let i = 0; i < this.props.totalRate; i += 2) {
                        totalStar += "★";
                    }
                }
                else {
                    for (let i = 0; i < parseInt(this.props.totalRate); i += 2) {
                        totalStar += "★";
                    }
                }
            }
        }
        totalPoint();


        return (
            <BaseLayout>
            {console.log(this.props.coverColor)}
                <GlobalStyle />
                <Background>
               { Header(this.props)}
                    <BookInfos>
                        <Middle>
                            <Book coverColor={this.props.coverColor}>
                                <div>
                                    <img src={`/${book.imageUrl}`} width="100%" height="100%" />
                                    </div>
                                    <section><p>{book.description}</p></section>
                                <div></div>
                                <div></div>
                                <div>
                                    <span>
                                        <h1>{book.title} {totalStar} ({this.props.totalRate} / 10)</h1>
                                        <h5>{book.author}</h5>
                                        <h4>{book.likeFigure}명이 서재에 보관 중</h4>
                                        <h3>{JSON.stringify(book.createdAt)}</h3>
                                        <h5>{book.description}</h5>
                                    </span>
                                </div>
                                <div><span>{book.author}</span><span>{book.title}</span></div>
                                <div></div>
                            </Book>

                            <CommentSpace>
                                <Comments>
                                    {book.review.map((item) => {

                                        let star = "";


                                        const starPoint = () => {

                                            if (item.rate) {
                                                if (item.rate / parseInt(item.rate) >= 1.1) {
                                                    for (let i = 0; i < item.rate; i += 2) {
                                                        star += "★";
                                                    }
                                                }
                                                else {
                                                    for (let i = 0; i < parseInt(item.rate); i += 2) {
                                                        star += "★";
                                                    }
                                                }
                                            }
                                        }
                                        starPoint();
                                        return (
                                            <Comment>
                                                <img src={item.creatorPhoto} width="50vh" />
                                                <h3>{item.creator}</h3>
                                                <h3>{item.content}</h3>
                                                <h3>{star}</h3>
                                                <h3>{item.rate}점</h3>
                                                <h3>{JSON.stringify(item.createdAt)}</h3>
                                                {UserWhoRated(item)}
                                            </Comment>
                                        )
                                    })}
                                </Comments>
                                <ActivateReview />
                            </CommentSpace>
                        </Middle>
                     {/*   <BookIntroduce>
                            <h1>{book.title} {totalStar} ({this.props.totalRate})</h1>
                            <h5>{book.author}</h5>
                            <h4>{book.likeFigure}명이 서재에 보관 중</h4>
                            <h3>{JSON.stringify(book.createdAt)}</h3>
                            <h5>{book.description}</h5>
                        </BookIntroduce>
                     */}
                    </BookInfos>
                    <CheckUser />
                </Background>
            </BaseLayout>
        )
    }
}

const Background = styled.section`
background-image: url("https://wallpaperset.com/w/full/d/d/8/488615.jpg");
background-size: cover;
padding-bottom: 20vh;
`

const Book = styled.div`
    margin-top: 10vh;
    padding-bottom: 60vh;
    width: 30%;
    box-shadow: 10px 10px 10px;
    :hover{
    animation: book-rotate 1s ;
    animation-fill-mode: forwards;
}
    /*:active{
    animation: book-rotate2 .5s ;
    animation-fill-mode: forwards;
    }*/
    :active{
    animation: moveBook 0.5s ease-in-out;
    animation-fill-mode: forwards;
    }
    transform-style: preserve-3d;
    perspective: 200vw;
        @keyframes moveBook {
            0%{
                
                transform: translateX(0vw) translateZ(0);
            }100%{
                
                transform: translateX(40vw) translateZ(200px);
            }
        }
    
    div:nth-child(1){
        position: absolute;
        width: 100%;
        height: 100%;
        border: solid 10px black;
        border-left:0;
        text-overflow:hidden;
        background-color: ${props => props.coverColor ? props.coverColor : "black"};
        background-size: cover;
        background-position: center center;
        
        transform: translateZ(2vw);
        transform-origin: 0 0;
        
        :active {
            animation: openBook 0.5s ease-in-out;
            animation-fill-mode: forwards;
            transform-style: preserve-3d;
           
            @keyframes openBook {
                0%{
                    transform: rotateY(0deg);
                    box-shadow: 0px 0px 0px;
                    
                }
                100%{
                    transform: rotateY(-150deg);
                    box-shadow: 10px 10px 10px;
                }
            }
        }
        img:nth-child(1){
            :active{
                animation:fadeImage 0.5s;
                animation-fill-mode:forwards;
                @keyframes fadeImage {
                    0%{
                        opacity:1;
                    }
                    100%{
                        opacity:0;
                    }
                }
            }
        }
    }
    section:nth-child(2){
        margin-top:10px;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color:white;
        text-overflow:hidden;
        z-index:-1;
        border-left:solid 2px black;
        p:nth-child(1){
            margin: 3vw;
        }
    }
    div:nth-child(3){
        position: absolute;
        width: 3.5vw;
        height: 100%;
        background-color: white;
        background-size: cover;
        background-position: center center;
        border: 0;
        transform: rotateY(90deg) translateZ(27.5vw);
        color:white;
        
    }
    div:nth-child(4){
        position: absolute;
        width: 4vh;
        height: 38vh;
        background-color: yellow;
        background-size: cover;
        background-position: center center;
        transform: rotateY(90deg) rotateX(90deg) translateY(17vh)  translateZ(19vh) ;

        color:white;
    }
    div:nth-child(5){
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${props => props.coverColor ? props.coverColor : "black"};
        font-size: 2vh;
        display:flex;
        background-size: cover;
        text-overflow:hidden;
        background-position: center center;
        transform: rotateY(180deg) rotateZ(0deg) translateZ(2vw);
        border: solid 10px black;
        border-right: 0;
        span:nth-child(1){
            position:absolute;
            font-family: 'Gugi', cursive;
            margin: 6vh 6vh 0 6vh;
            color: ${props => props.coverColor ? props.coverColor : "black"};
            -webkit-filter: invert(100%);
            filter: invert(100%);
        }
    }
    div:nth-child(6){
        position: absolute;
        width: 4vw;
        height: 100%;
        border-top:solid 10px black;
        background-color: ${props => props.coverColor ? props.coverColor : "black"};
        background-size: cover;
        background-position: center center;
        transform: rotateY(-90deg) rotateZ(0deg) translateZ(2vw) ;
        font-size: 3vh;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        span:nth-child(1){
            transform:rotateZ(90deg);
            text-align:center;
            display:flex;
            width:10em ;
            font-size:1rem;
            color: ${props => props.coverColor ? props.coverColor : "black"};
            -webkit-filter: invert(100%);
            filter: invert(100%);
            
        }
        span:nth-child(2){
            color: ${props => props.coverColor ? props.coverColor : "black"};
            -webkit-filter: invert(100%);
            filter: invert(100%);
        }
    }
    div:nth-child(7){
        position: absolute;
        width: 200px;
        height: 200px;
        border: solid 2px black;
        background-color: white;
        background-size: cover;
        background-position: center center;
        transform: rotateX(-90deg) translateZ(100px);
        color:white;
    }
@keyframes book-rotate {
    from,to{
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        box-shadow: 10px 10px 10px;
        
    }
    100%{
        transform: rotateY(180deg);
        box-shadow: 0px 0px 0px;
    }
}
@keyframes book-rotate2 {
    from,to{
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        
    }
    100%{
        transform: rotateY(90deg)
        
    }
}

`



const BookInfos = styled.div`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const Middle = styled.div`

display: flex;
justify-content: space-between;
width: 100%;
height: 70%;
`

const CommentSpace = styled.section`
    margin-top: 10vh;
    padding-bottom: 60vh;
    display: flex;
    flex-direction: column;
    box-shadow: 10px 5px 20px #00c8eb;
    width: 30%;
    border-radius: 20px;
    align-items: center;
    background-color:black;
    `
const Comments = styled.ul`
    
    padding-bottom: 60vh;
overflow: auto;
width: 100%;
height:100%;
background-image: url('https://neilpatel.com/wp-content/uploads/2015/03/comments.jpg');
background-size: cover;
background-position: center center;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 20px;
`

const Comment = styled.li`
display:flex;
flex-direction: column;
align-items: center;
color:black;
margin-top:0.3rem;
background-color: rgba(255,255,255,0.3);
`

const InputReview = styled.textarea`
border: solid 2px black;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
width: 20vw;
height:2.5vh;
border-radius:15px;
:focus{
    
    animation: focus 0.5s;
    animation-fill-mode:forwards;
    ::placeholder{
            opacity:0;
        }
}

@keyframes focus {
    0%{
        
        height:0vh;
       
    }
    100%{
        height:20vh;
        
        
    }
}
`
const InputRate = styled.input`
border: solid 2px black;
text-align:center;
`
const ReviewSubmit = styled.input`
border: solid 2px black;
text-align:center;
`

const BookIntroduce = styled.section`
margin-bottom: -15vw;
background-color:rgba(255,255,255,0.3);
`

const User_img = styled.img`
    border-radius:100%;
`;

export default bookDetail