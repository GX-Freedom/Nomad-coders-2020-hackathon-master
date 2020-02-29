import React from "react";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "./GlobalStyle/ResetCss";


const Imag_styles = styled.img`
    position: relative;
    width:15%;
    /* 10rem */
    display:inline-block;
    margin-top:-3rem;
`;

export default function title() {


    return (
        <BaseLayout>
            <>
            <GlobalStyle/>
                <a href="/">
                    <Imag_styles src="../images/BooLuv_logo.png" alt="" />
                </a>
            </>
        </BaseLayout>
    );

}