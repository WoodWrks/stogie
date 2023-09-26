import React from "react"
import styled from 'styled-components';

import stogieSVG from "../../assets/brand/stogie.svg";
import blueBG from '../../assets/images/blue-bg.jpg';
import blueProduct from '../../assets/images/blue-product.jpg';
import greenBG from '../../assets/images/green-bg.jpg';
import greenProduct from '../../assets/images/green-product.jpg';

const Section = styled.section`
    display:flex;
    position:relative;
    justify-content:space-between;
`
const Column = styled.div`
    display:flex;
    flex: 1 0;
    max-height:100vh;
    background-size: auto 100%;
    overflow:hidden;
    justify-content:center;
    img{
        height:100%;
    }
`
const Left = styled(Column)`
    background-image: url(${greenBG});
`
const Right = styled(Column)`
    background-image: url(${blueBG});
`
const Logo = styled.div`
    display:flex;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:2;
    justify-content:center;
    img{
        height:auto;
        width:15vw;
    }
`
const Product = () => {
    return(
        <Section>
            <Logo>
                <img src={stogieSVG} />
            </Logo>
            <Left>
                <img src={greenProduct} />
            </Left>
            <Right>
                <img src={blueProduct} />
            </Right>
        </Section>
    );
}
export default Product;