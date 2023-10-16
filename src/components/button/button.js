import React from "react"
import styled from "styled-components";
import {Link} from "gatsby";

const ButtonStyled = styled(Link)`
    margin:0;
    padding: var(--gutter-xs) var(--gutter-md);
    color: ${ props => props.color === 'dark' ? ( {theme} ) => theme.neutralForegroundInverted1 : ( {theme} ) => theme.neutralForeground1 };
    background-color: ${ props => props.color === 'dark' ? ( {theme} ) => theme.neutralBackgroundInverted1 : ( {theme} ) => theme.neutralBackground1 };
    font-family:var(--theme-font-secondary);
    font-size:var(--font-sm);
    text-transform:uppercase;
    text-decoration:none;
    border:0;
    border-radius:1px;
    box-shadow:none;
    transition: all var(--durationSlow) var(--curveDecelerateMin);
    transform: scale(1.0);
    white-space: nowrap;
    &:hover{
        cursor:pointer;
        color: ${ props => props.color === 'dark' ? ( {theme} ) => theme.neutralForegroundInverted1 : ( {theme} ) => theme.neutralForeground2 };
        background-color: ${ props => props.color === 'dark' ? ( {theme} ) => theme.neutralBackgroundInverted2 : ( {theme} ) => theme.neutralBackground2 };
        border:0;
        box-shadow:none;
        transform: scale(1.02);
    }
`

const Button = (props) => {

    return(
        <ButtonStyled className="button" to={props.to} {...props}>{props.children}</ButtonStyled>
    );

}

export default Button;
