import React from "react";
import routes from "../routes";
import Title from "./title";


function Login(props){
const Auths = () => {
    
const instyle ={
    margin:"5px",
    padding:"0",
    
}
const btn={
    borderRadius:"15px",
    backgroundColor:"red",
}
const center_box={
    height:"80vh",

    display:"felx",
    flexDirection: "column",
    textAlign:"center",
    backgroundColor:"rgba(107, 26, 184, 0.085)",

}
const box={

}

    return (
    <React.Fragment  style={center_box}>
        <Title/>
    <div style={center_box}>
        <a href={props.routes.googleAuth} style={instyle}>구글 로그인</a>
        <a href={props.routes.naverAuth}style={instyle}>네이버 로그인</a>
        <form action={props.routes.login} method="post">
        <input type="email" name="email" placeholder="이메일"style={instyle}></input>
        <input type="password" name="password" placeholder="패스워드"style={instyle}></input>
        <input type="submit" value="로그인" style={btn}></input>
        </form>
    </div>
    </React.Fragment>
    )}


    return (
        Auths()
    );
}



 export default Login;