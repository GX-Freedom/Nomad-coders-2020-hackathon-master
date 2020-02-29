import React from "react";
import Title from "./title";
import  Header  from "./Header";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import {GlobalStyle}from "./GlobalStyle/ResetCss";

const Div = styled.div`
    display:flex;

`;
const Input = styled.input`
    margin:0.4rem;
`;


class uploadBook extends React.Component {


    render() {
        return (
            <BaseLayout>
                {Header(this.props)}
                <Div>
                    <form action={this.props.routes.addBook} method="post" enctype="multipart/form-data">
                        <Input type="text" name="bookName" placeholder="책 제목" required="true"/>
                        <Input type="textarea" name="bookDescription" placeholder="책 상세설명"/>
                        <Input type="text" name="author" placeholder="작가 이름" />
                        <Input type="file" name="bookImage" />
                        <Input type="submit" value="제출" />
                    </form>
                </Div>
            </BaseLayout>
        )
    }
}

export default uploadBook;