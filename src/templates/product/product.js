import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        width:20vw;
    }
`
const Product = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;
        gsap.set(element.querySelector(".logo"),{
            opacity:0.0,
            scale:0.4
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "-10% center",
                end: "70% center",
                scrub: false,
                markers: false
            }
        })
        .to(element.querySelector(".logo"),{
            opacity:1.0,
            scale:1.0
        })
    }, []);
    return(
        <Section ref={ref}>
            <Logo className="logo">
                <img src={stogieSVG} />
            </Logo>
            <Left className="left">
                <img src={greenProduct} />
            </Left>
            <Right className="right">
                <img src={blueProduct} />
            </Right>
        </Section>
    );
}
export default Product;