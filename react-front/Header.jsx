
import React from "react";
import routes from "../routes"
import Title from "./title";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "./GlobalStyle/ResetCss";

const Div = styled.div`
  width:100%;
  height:10vh;
  position:sticky;
  display:flex;
  background-color:rgba(255, 235, 205, 0.233);
`;
const RightDiv = styled.div`
  width:23rem;
  text-align:end;
`;
const A = styled.a`
  margin:0.7rem;
  text-decoration:none;
  color:${props => props.color || "red"};
`;
const Input = styled.input`
margin:0.6rem;
`;
function Header(props) {

  function ProfileLink() {
    if (props.user) {
      return (
        <RightDiv>
          <A href={props.routes.profile(props.user.id)}>프로필</A>
        </RightDiv>

      )
    } else {
      return (
        <RightDiv>
          <h4>로그인 된 유저가 없습니다.</h4>
        </RightDiv>
      )
    }
  }
  function CheckLogin() {
    if (props.user) {
      return (
        <RightDiv>
          <A href={routes.logout}> 로그아웃</A>
          <A href={routes.addBook}>새로운 책 등록</A>
          <A href={routes.myBookList(props.user.id)}>즐겨찾기 목록</A>
        </RightDiv>)
    } else {
      return (
        <RightDiv>
          <A href={routes.login}>로그인</A>
          <A href={routes.join}>가입</A>
        </RightDiv>
      )
    }
  }

  return (
    <BaseLayout>
        <GlobalStyle />
        <Div className="class_name_header" >
          <Title />
          <RightDiv>
            <ProfileLink />
            {/*<a href={routes.profile(props.user.id)}>
      <img src={props.user.profilePhoto} alt="Profile photo." width="50vh"></img>
    </a>
    {<a href={routes.myBookList(user.id)} >내 서재</a>}*/}
            {/* <a href={routes.addBook}> 새로운 책 등록</a>, */}
            <form action={routes.search} method="post">
              <Input type="text" name="search" required={true} placeholder="검색" />
              <Input type="submit" value="검색" />
              {/* <i className="fa fas-search fa-2x"></i> */}
            </form>
            <CheckLogin />
          </RightDiv>
        </Div>
    </BaseLayout>
  );
}


export default Header;