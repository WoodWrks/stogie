import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Button from "../../components/button";

const Section = styled.section`
    display:flex;
    margin: 0 auto;
    padding: 20vh 15vw;
    width: 100vw;
    overflow:hidden;
    @media screen and (max-width: 769px){
        padding: 10vh 0;
        width: 80vw;
        flex-direction: column;
    }
`;

const Headline = styled.div`
    flex: 1 0;
    padding: 0 var(--gutter-lg) 0 0;
    p{
        margin:0;
        padding:0;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        font-family:var(--theme-font-secondary);
        font-size:var(--font-xl);
        text-transform:uppercase;
    }
    @media screen and (max-width: 769px){
        padding: 0 0 var(--gutter-md) 0;
    }
`

const Body = styled.div`
    flex: 1 0;
    p{
        margin:4px 0 var(--gutter-md);
        padding:0;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        font-family:var(--theme-font-primary);
        font-size:var(--font-md);
    }
`

const Intro = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const intro = ref.current;
        gsap.set(intro.querySelector(".headline"),{
            opacity: 0.0,
            x:"-=100px"
        })
        gsap.set(intro.querySelector(".body"),{
            opacity: 0.0,
            x:"+=100px"
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: intro,
                start: "-20% center",
                end: "60% center",
                scrub: false
            }
        })
        .to(intro.querySelector(".headline"),{
            opacity: 1.0,
            x:0,
            ease: 'Circ.easeOut'
        }).to(intro.querySelector(".body"),{
            opacity: 1.0,
            x:0,
            ease: 'Circ.easeOut'
        })
    }, []);

    const lenis = new Lenis({
        duration: 1, // speed
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: "vertical", // vertical, horizontal
        gestureDirection: "vertical", // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 0.5, // sensibility
        smoothTouch: false, // Mobile
        touchMultiplier: 2, // sensibility on mobile
        infinite: false // Infinite scrolling
      });
    const handleClickScroll = (event) => {
        
        event.preventDefault();
        const element = document.getElementById('contact');
        console.log('click');
        if (element) {
            console.log('scroll');
            lenis.scrollTo('#contact');
            //element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <Section ref={ref} id="intro">
            <Headline className="headline">
                <p>Introducing Stogie, a uniquely modern example of classic hand pipe design.</p>
            </Headline>
            <Body className="body">
                <p>First used by ancient monks, cylindrical open-ended smoking pipes, or “chillums,” have been associated with introspection, meditation, and spirituality. It is said — only after a lifetime guided by these fundamental practices, may one begin to realize enlightenment. Sounds like quite the trip...better pack accordingly.</p>
                <p>Ready to chill and breathe in the finer things?</p>
                <Button type="Link" color="light" to="#contact" >Give us a shout</Button>
            </Body>
        </Section>
    );
}
export default Intro;