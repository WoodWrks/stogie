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
    width: 100vw;
    overflow:hidden;
    @media screen and (max-width: 420px){
        background-size:100px;
    }
`

const HeroStyled = styled.section`
    position:relative;
    min-height:90vh;
    background-image:url(${hero});
    background-position: 50% 50%;
    background-size:130vw auto;
    background-repeat:no-repeat;
    margin-left:-10vw;
    @media screen and (max-width: 1440px){
        margin-left:-5vw;
    }
    @media screen and (max-width: 1201px){
        background-size:150vw auto;
    }
    @media screen and (max-width: 769px){
        margin-left:-30vw;
        background-size:200vw auto;
    }
    @media screen and (max-width: 641px){
        margin-left:-50vw;
        background-size:240vw auto;
    }
    @media screen and (max-width: 421px){
        margin-left:-60vw;
        min-height:85vh;
        background-size:260vw auto;
    }
    @media screen and (max-width: 376px){
        margin-top:-15vw;
        background-size:240vw auto;
    }
    .content{
        margin:0 auto;
        padding: 37vh 0 0;
        width:50vw;
        @media screen and (max-width: 1601px){
            width:60vw;
        }
        @media screen and (max-width: 1440px){
            padding: 40vh 0 0;
            width:60vw;
        }
        @media screen and (max-width: 1201px){
            padding: 40vh 0 0;
            width:70vw;
        }
        @media screen and (max-width: 769px){
            padding: 60vh 0 0 10vw;
            width:70vw;
        }
        @media screen and (max-width: 641px){
            padding: 65vh 0 0 25vw;
        }
        @media screen and (max-width: 421px){
            padding: 60vh 0 0 25vw;
        }
        @media screen and (max-width: 376px){
            padding: 60vh 0 0 25vw;
        }
    }
    h1{
        margin:0;
        padding:0;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        font-family:var(--theme-font-secondary);
        img{
            height:9rem;
            @media screen and (max-width: 1440px){
                height:7.75rem;
            }
            @media screen and (max-width: 1201px){
                height:7.5rem;
            }
            @media screen and (max-width: 1025px){
                height:6.5rem;
            }
            @media screen and (max-width: 376px){
                height:4rem;
            }
        }
    }
    h2{
        margin:-12px 0 0;
        padding:0;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        font-family:var(--theme-font-secondary);
        font-size:1.75rem;
        @media screen and (max-width: 1440px){
            font-size:var(--font-lg);
        }
        @media screen and (max-width: 1201px){
            margin:-20px 0 0;
            font-size:1.25rem;
        }
        @media screen and (max-width: 1025px){
            font-size:1.1rem;
        }
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
                    <h1><img src={stogieSVG}  alt="Stogie" /></h1>
                    <h2>A highly refined<br/>smoking experience.</h2>
                </div>
            </HeroStyled>
            <Divide position="bottom" />
        </HeroContainer>
    );
}
export default Hero;