import React from "react"
import styled from "styled-components";
import {Link} from "gatsby";

const ButtonStyled = styled(Link)`
    margin:0;
    padding: var(--gutter-xs) var(--gutter-md);
    color: ${( {theme} ) => theme.neutralForeground1};
    background-color: ${( {theme} ) => theme.neutralBackground1};
    font-family:var(--theme-font-secondary);
    font-size:var(--font-sm);
    text-transform:uppercase;
`

const Button = (props) => {

    return(
        <ButtonStyled to={props.to}>{props.children}</ButtonStyled>
    );

}

export default Button;
