import React from "react";
import routes from "../routes"
import Title from"../react-front/title";
import styled,{css} from "styled-components";


const instyle ={
    margin:"5px",
    padding:"0"
}
function Join(props) {

    const inputStyle={
        display:"flex",
        flexDirection:"column",
        width:"15rem",
        textAlign:"center",
        cursor: "pointer",

    }

    const centerStyle={     
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"rgba(107, 26, 184, 0.085)",

    }
    const aspan={
        display:"none",
    }
    const snsimg={
        display:"inline-block",
        width:"50px",
        padding:"10px",
        borderRadius:"25px",
        backgroundColor:"rgba(218, 208, 208, 0.301)",
        backgroundnColor:"rgba(218, 208, 208, 0.274)",
    }
    const astate={
        display:"flex",
        margin:"1rem",
    }
    return (
        <div className="join_box" style={centerStyle}>
            <Title/>
            <form className="form_box" action={props.routes.join} method="post" style={inputStyle}>
                <input type="text" name="username" required={true} style={instyle} placeholder="닉네임" />
                <input type="text" name="email" required={true} placeholder="이메일" style={instyle} />
                <input type="password" name="password" required={true} placeholder="비밀번호" style={instyle} />
                <input type="password" name="password2" required={true} placeholder="비밀번호 확인" style={instyle}/>
                <input type="submit" value="가입"style={instyle} />
            </form>
                <div style={astate}>
                    <a href={props.routes.googleAuth} style={astate}>
                        <spans style={aspan}>구글 로그인</spans>
                        <img style={snsimg} src="data:image/png;base64,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" alt=""/>
                    </a>
                    <a href={props.routes.naverAuth}style={astate}>
                        <span style={aspan}>네이버 로그인</span>
                        <img style={snsimg} src="https://img.utdstc.com/icons/naver-android.png:l" />
                    </a>
                    <a href={props.routes.slackAuth} style={astate}>
                        <span style={aspan}>슬랙 로그인</span>
                        <img style={snsimg} src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
                    </a>
                </div>
        </div>
    );

}

// function Join() {

//     return (
//         <div className="join_box">
//             <form action={routes.join} method="post">
//                 <input type="text" name="username" required={true} placeholder="email" />
//                 <input type="text" name="email" required={true} placeholder="email" />
//                 <input type="passwrod" name="password" required={true} placeholder="email" />
//                 <input type="submit" value="검색" />
//             </form>
//         </div>
//     );

// }


export default Join;