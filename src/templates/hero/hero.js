import React, {useRef, useEffect} from "react"
import styled from "styled-components";
import { gsap } from "gsap";

import Divide from "../../components/divide";

import stogieSVG from "../../assets/brand/stogie.svg";
import hero from "../../assets/images/hero.png";
import heroBG from "../../assets/images/hero-bg.png";

const HeroContainer = styled.div`
    position:relative;
    background-image:url(${heroBG});
    background-size:300px;
    @media screen and (max-width: 420px){
        background-size:100px;
    }
`

const HeroStyled = styled.section`
    position:relative;
    min-height:90vh;
    background-image:url(${hero});
    background-position: 50% 50%;
    background-size:1764px auto;
    background-repeat:no-repeat;
    @media screen and (max-width: 1025px){
        background-size:1200px;
    }
    @media screen and (max-width: 769px){
        background-size:1000px auto;
    }
    @media screen and (max-width: 640px){
        margin-left:-20vw;
        background-size:900px auto;
    }
    @media screen and (max-width: 420px){
        margin-left:-50vw;
        min-height:80vh;
        background-size:1000px auto;
    }
    @media screen and (max-width: 376px){
        margin-left:-50vw;
        min-height:90vh;
        background-size:750px auto;
    }
    .content{
        margin:0 auto;
        padding: 25vh 0 0;
        width:50vw;
        @media screen and (max-width: 1025px){
            padding: 30vh 0 0;
            width:70vw;
        }
        @media screen and (max-width: 769px){
            padding: 50vh 0 0 15vw;
        }
        @media screen and (max-width: 640px){
            padding: 55vh 0 0 25vw;
            width:100vw;
        }
        @media screen and (max-width: 420px){
            padding: 55vh 0 0 35vw;
        }
        @media screen and (max-width: 376px){
            padding: 55vh 0 0 35vw;
        }
    }
    h1{
        margin:0;
        padding:0;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        font-family:var(--theme-font-secondary);
        img{
            height:var(--gutter-xl);
            @media screen and (max-width: 376px){
                height:var(--gutter-lg);
            }
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
        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: element,
        //         start: "80% center",
        //         end: "150% center",
        //         scrub: true,
        //         markers: true
        //     }
        // })
        // .to(element,{
        //     opacity:0.0,
        //     backgroundPosition: '50% 50%'
        // })
        // .to(element.querySelector("div"),{
        //     opacity: 0.0,
        //     x: "-50px",
        // })
        
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