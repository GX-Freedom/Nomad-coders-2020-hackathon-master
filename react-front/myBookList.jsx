import React from "react";
import Title from "./title";
import  Header  from "./Header";

import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import {GlobalStyle}from "./GlobalStyle/ResetCss";


class MyBookList extends React.Component {
    render() {
        //console.log(this.props.currentUser)
        const routes = this.props.routes
        return (
            <div>
                <div>
                    <Title/>
                {/* {Header(this.props)} */}
                </div>
                <h2>{this.props.currentUser.username}님의 즐겨찾기 목록:</h2>

                {/* test ↓*/}
                <ul className="list">
                    <li>
                        <img src="../images/wood.jpg" alt="" />
                        <span className="book_name">
                            book_name
                        </span>

                    </li>
                    <li>
                        <img src="../images/wood.jpg" alt="" />
                        <span className="book_name">
                            book_name
                        </span>
                    </li>
                    <li>
                        <img src="../images/wood.jpg" alt="" />
                        <span className="book_name">
                            book_name
                        </span>

                    </li>
                    <li>
                        <img src="../images/wood.jpg" alt="" />
                        <span className="book_name">
                            book_name
                        </span>
                    </li>
                    <li>
                        <img src="../images/wood.jpg" alt="" />
                        <span className="book_name">
                            book_name
                            </span>
                    </li>
                </ul>
                <div>
                    <img src="../images/shelf.png" alt="" />
                </div>
                {/* test ↑ */}


                <ul className="list">
                    <li>
                        <img src="../images/wood.jpg" alt="" />
                        <span className="book_name">
                            book_name
                        </span>
                        {/* <img src={books.imgUrl} className=""book_img/> */}
                    </li>

                    <li>
                        <img src="../images/wood.jpg" alt="" />
                        <span className="book_name">
                            book_name
                        </span>
                    </li>

                    {this.props.currentUser.favBooks.map(book => {
                        return (
                            <li>
                                <a href={`/${this.props.routes.bookDetail(book.id)}`}>
                                    <img src={`/${book.imageUrl}`} alt="" />
                                    <h2>{book.title}</h2>
                                    <h3>{book.author}</h3>
                                    <h4>{book.description}</h4>
                                    <form action={routes.deleteFavBook(book.id)} method="post">
                                        <input type="submit" value="즐겨찾기 삭제" />
                                    </form>
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div>
                    <img src="../images/shelf.png" alt="" />
                </div>


                
            </div>
        )
    }

}

export default MyBookList