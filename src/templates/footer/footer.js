import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import { gsap } from "gsap";

import footerBG from "../../assets/images/footer-bg.jpg";
import Image from '../../assets/images/footer.jpg';

const FooterStyled = styled.footer`
    padding: var(--gutter-xl) 0 0;
    background-image:url(${footerBG});
    background-size:60vw auto;
    background-color:red;
`;
const FooterImage = styled.div`
    display:flex;
    justify-content: center;
    img{
        height:auto;
        width:60vw;
        @media screen and (max-width: 769px){
            width:60vw;
        }
        @media screen and (max-width: 420px){
            width:100vw;
        }
    }
`;
const Footer = () => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.set(element.querySelector(".footer-image"),{
            opacity: 0.0,
        })
        gsap.to(element.querySelector(".footer-image"),{
            opacity: 1.0,
            delay: 0.2,
            duration: 1.5,
            ease: 'Circ.easeOut'
        })
    }, []);

    return (
        <FooterStyled ref={ref}>
            <FooterImage className="footer-image"><img src={Image} /></FooterImage>
        </FooterStyled>
    );
}
export default Footer;