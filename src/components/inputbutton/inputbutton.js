import React from "react"
import styled from "styled-components";

const ButtonStyled = styled.input`
    margin:0;
    padding: 0.75rem 2rem 0.75rem 2rem;
    color: ${ props => props.color === 'dark' ? ( {theme} ) => theme.neutralForegroundInverted1 : ( {theme} ) => theme.neutralForeground1 };
    background-color: ${ props => props.color === 'dark' ? ( {theme} ) => theme.neutralBackgroundInverted1 : ( {theme} ) => theme.neutralBackground1 };
    font-family:var(--theme-font-secondary);
    font-size:var(--font-md);
    text-transform:uppercase;
    text-decoration:none;
    border:0;
    border-radius: var(--borderRadius-xs);
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

const InputButton = (props) => {

    return(
        <ButtonStyled className="button" type="submit" {...props}>{props.children}</ButtonStyled>
    );

}

export default InputButton;
