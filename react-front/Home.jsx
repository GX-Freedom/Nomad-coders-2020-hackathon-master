import React from "react";
import Header from "./Header";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import {GlobalStyle}from "./GlobalStyle/ResetCss";


const Div = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

`;
const Hone = styled.h1`

`;


function Home(props) {


    function recommendList() {
        if (props.recomendBooks) {
            return (
                <h4>{props.user.username}님만을 위한 추천 리스트 : </h4>
            )
        }
    }
    function recomSys() {

        if (props.recomendBooks) {
            return (
                props.recomendBooks.map(argument => {
                    return (
                        <li >
                            <a href={`/${props.routes.bookDetail(argument.id)}`}>
                                <img src={argument.imageUrl} />
                                <h3>{argument.title}</h3>
                                <h4>{argument.author}</h4>
                                <h4>{argument.description}</h4>
                            </a>
                        </li>
                    )

                })

            )
        } else {
            return "";
        }

    }
    const bookList =
        props.books.map(book => {
            return (
                <div className="booklist_home">
                    <div className="grid_box">
                        <a href={props.routes.bookDetail(book.id)}>
                            <img src={book.imageUrl} alt={book.imageUrl} />
                            <div className="text_box" >
                                <h1>{book.title}</h1>
                                <h2>작가 : {book.author}</h2>
                                <h3>({book.enrolledBy[0].username}님이 등록)</h3>
                                <h3>{JSON.stringify(book.createdAt)}</h3>
                                <h3>{book.description}</h3>
                            </div>
                        </a>
                    </div>


                </div>
            )
        })

    //ReactDOM.render(<Join/>, document.getElementById("root"));
    return (
        <BaseLayout>
            <GlobalStyle/>
                {Header(props)}
                {bookList}
                <div>
                    {recommendList()}
                    <ul>
                        {recomSys()}
                    </ul>
                </div>
        </BaseLayout>
    );
}

export default Home;