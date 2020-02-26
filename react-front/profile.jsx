import React from "react";
import styled,  {css} from "styled-components";
import Title from "./title";

const style={
    display:"flex",
    flexDirection:"column",
    textAlign:"center",
    justifyConter:"center",

}
const buttonStyle={
    marginTop:"20vh",
  
}

const styledTest = styled.div`
    color: red;
`;


const styledButton = styled.button`
    margin:3rem;
    color:red;
`;



class profile extends React.Component{
    render(){
        return(
        console.log(this.props.currentUser),

            <div style={style}>
                <Title/>
                <a  style={buttonStyle}  href={this.props.routes.editUser(this.props.user.id)}>
                   <button> 프로필 수정 </button>
                </a>
                <styledTest styled={styledTest}>styled component apply</styledTest>
{/*                 
                <style jsx>{`
                    html, body {
                    margin: 0;
                    padding:0;
                    color:red;
                    }
            `}</style>   */}

            </div>
        )
    }

}

export default profile