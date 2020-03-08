import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Divs = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin:1.4rem;
    &>*>span{
        color:yellow;
    }
`;
const Asns = styled.a`
    margin:0.7rem;

    &>span{
        display:none;
    }

`;

const Image = styled.img`
    margin:1.5rem;
    width:4rem;
    border-radius:100%;
    padding:0.6rem;
    border:0.7px solid rgba(255, 206, 173, 0.459);
    background-color: rgba(151, 150, 150, 0.164);

`;
const Box_img = styled.div`
    display:flex;
    width:30rem;
    height:20rem;
    background-color:rgba(229, 224, 149, 0.582);
    align-items:center;
    justify-content:center;
    flex-direction:column;
    border-bottom-right-radius:10px;
  
`;

const Input = styled.input`
    margin:0.4rem;
    &:hover{
        cursor:pointer;
    }
`;

function Login(props) {
    const Auths = () => {

        return (
            <BaseLayout>
                <GlobalStyle />
                <div style={{ marginTop: "-1.45rem" }}>
                    <Header />
                </div>
                <Divs >
                    <Box_img>
                        <form action={props.routes.login} method="post">
                            <Input type="email" name="email" placeholder="이메일"></Input>
                            <Input type="password" name="password" placeholder="패스워드"></Input>
                            <Input type="submit" value="로그인"></Input>
                        </form>
                        <div>
                            <Asns href={props.routes.googleAuth}>
                                <span>구글 로그인</span>
                                <Image src="data:image/png;base64,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" alt="" />
                            </Asns>
                            <Asns href={props.routes.naverAuth}>
                                <span>네이버 로그인</span>
                                <Image src="https://img.utdstc.com/icons/naver-android.png:l" />
                            </Asns>
                            <Asns href={props.routes.slackAuth}>
                                <span>슬랙 로그인</span>
                                <Image src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
                            </Asns>
                        </div>
                    </Box_img>
                </Divs>
            </BaseLayout>
        )
    }


    return (
        Auths()
    );
}



export default Login;