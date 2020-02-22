
import React from "react";
import routes from "../routes"
import Title from "./title";

function Header(props){
    const style={
      postion:"absolute",
      color:"red",
    }
        
    const pstyle={
      position:"absolute",
      color:"red",
      fontSize: "1rem",
      right:"10px",
      top:"10px",
      padding:"10px",
      textDecoration: "none",

    }
    const amrgin={
      margin:"7px",
      textDecoration: "none",

    }

    return(
      
        <div className="header">
          <Title/>
          <div className="flex_box"style={pstyle} >
          {/* <img src="images\Book-Worm.jpg" alt="" style={style} /> */}
          <a href={props.routes.profile(props.user.id)} style={pstyle} >프로필</a>
        {/*<a href={routes.profile(props.user.id)}>
        <img src={props.user.profilePhoto} alt="Profile photo." width="50vh"></img>
      </a>
      {<a href={routes.myBookList(user.id)} >내 서재</a>}*/}
        {/* <a href={routes.addBook}> 새로운 책 등록</a>, */}
        <form action={props.routes.search} method="post">
            <input type="text" name="search"  required={true} placeholder="검색"style={amrgin}/>
            <input type="submit" value="검색"style={amrgin}/>
            {/* <i className="fa fas-search fa-2x"></i> */}
        </form>
        <a href={props.routes.login}style={amrgin}>로그인</a>
        <a href={props.routes.logout}style={amrgin}> 로그아웃</a>
        <a href={props.routes.join}style={amrgin}>가입</a>
        <a href={props.routes.addBook}style={amrgin}>새로운 책 등록</a>
        </div>
      </div>    
    );
}


export default Header;