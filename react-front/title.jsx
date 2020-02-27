import React from "react";

export default function title() {

    const style = {
        display: "inline-block",
        width: "20%",
        height: "15vh",
        //position:"fixed",
        marginTop: "-1.2vh",
        justifyContent: "center",
    }

    return (

        <a href="/">
            <img src="../images/BooLuv_logo.png" alt="" style={style} />
        </a>);

}