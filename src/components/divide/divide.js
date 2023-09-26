import React, {useRef, useEffect} from "react"
import styled from 'styled-components';

import divideTransTop from "../../assets/images/divide-transTop.png";
import divideTransBottom from "../../assets/images/divide-transBottom.png";

const DivideStyled = styled.span`
    position: absolute;
    top: ${ props => props.position === 'top'  ? '0px' : 'inherit' };
    bottom: ${ props => props.position === 'bottom' ? '0px' : 'inherit' };
    width:100%;
    height:15px;
    background-image: url(${ props => props.position === 'top' ? divideTransBottom : divideTransTop});
    background-size:30px auto;
    background-repeat: repeat-x;
    hr{
        margin:0;
        padding:0;
        height:0;
        width:100%;
        border:none;
    }
`

const Divide = (props) => {

    return(
        <DivideStyled className={props.className} {...props} ><hr/></DivideStyled>
    );

}

export default Divide;
