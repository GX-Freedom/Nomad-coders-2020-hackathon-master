import React from "react";
import Title from "./title";
import Header from "./Header";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import {GlobalStyle}from "./GlobalStyle/ResetCss";
import  Header  from "./Header";


// const redColor = styled.div`
//     color: blue;

// `;


class editProfile extends React.Component {
    render() {
        return (

            <div className="user_edit proile">
                                {Header(this.props)}

                <form action={this.props.routes.editUser(this.props.user.id)}>
                    <input type="text" name="username" placeholder="닉네임"/>
                    <input type="file" name="profilePhoto" placeholder="프로필 사진" />
                    <input type="password" name="password" placeholder="변경할 비밀번호" />
                    <input type="password" name="password2" placeholder="비밀번호 확인" />
                    <input type="submit" value="프로필 수정" />
                </form>
            </div>

        )
    }
}

export default editProfile;