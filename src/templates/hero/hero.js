import React, {useRef, useEffect} from "react"
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Divide from "../../components/divide";

import stogieSVG from "../../assets/brand/stogie.svg";
import hero from "../../assets/images/hero.png";
import heroBG from "../../assets/images/hero-bg.png";

const HeroContainer = styled.div`
    position:relative;
    background-image:url(${heroBG});
    background-size:300px;
`

const HeroStyled = styled.section`
    position:relative;
    min-height:80vh;
    background-image:url(${hero});
    background-position: 50% 50%;
    background-size:1764px auto;
    background-repeat:no-repeat;
    .content{
        margin:0 auto;
        padding: 25vh 0 0;
        width:50vw;
    }
    h1{
        margin:0;
        padding:0;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        font-family:var(--theme-font-secondary);
        img{
            height:var(--gutter-xl);
        }
    }
    h2{
        margin:-12px 0 0;
        padding:0;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        font-family:var(--theme-font-secondary);
        font-size:var(--font-lg);
        text-transform:uppercase;
    }
`;

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.set(element,{
            opacity:0.0,
            backgroundPosition: '50% 50%',
        })
        gsap.set(element.querySelector("div"),{
            opacity: 0.0,
            x: "-50px",
        })
        gsap.to(element.querySelector("div"),{
            opacity: 1.0,
            x: '0',
            duration: 1.5,
            delay:1,
            ease: 'Circ.easeOut'
        })
        gsap.to(element,{
            opacity: 1.0,
            backgroundPosition: '60% 50%',
            duration: 2.5,
            delay:1,
            ease: 'Circ.easeOut'
        })
        
      }, []);
    return(
        <HeroContainer>
            <HeroStyled ref={ref} id="hero">
                <div className="content">
                    <h1><img src={stogieSVG} /></h1>
                    <h2>A highly refined<br/>smoking experience.</h2>
                </div>
            </HeroStyled>
            <Divide position="bottom" />
        </HeroContainer>
    );
}
export default Hero;