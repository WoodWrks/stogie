import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../components/button";


import ThreadedImage from '../../assets/images/threaded.png';
import ThreadedMask from '../../assets/images/threaded-mask.png';
import ThreadedBg from '../../assets/images/threaded-bg.png';

const Section = styled.section`
    position:relative;
    display:flex;
    margin: 0 auto;
    padding: 20vh 15vw;
    width: 100vw;
    overflow:hidden;
    @media screen and (max-width: 769px){
        padding: 10vh 0;
        width: 80vw;
    }
    @media screen and (max-width: 541px){
        flex-direction: column-reverse;
    }
    @media screen and (max-width: 420px){
        padding: 0 0 10vh;
    }
`;
const Left = styled.div`
    flex: 1 0;
    padding: 0 var(--gutter-lg) 0 0;
    @media screen and (max-width: 769px){
        padding: 0 var(--gutter-sm  ) 0 0;
    }
    h2{
        margin:0;
        padding:0;
        font-family:var(--theme-font-secondary);
        font-size:var(--font-xxxl);
        line-height:100%;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        text-transform:uppercase;
    }
    p{
        margin:var(--gutter-sm) 0 var(--gutter-md);
        padding:0;
        color: ${( {theme} ) => theme.neutralForegroundInverted1};
        font-family:var(--theme-font-primary);
        font-size:var(--font-md);
    }
`

const Right = styled.div`
    display:flex;
    flex: 1 0;
    justify-content:center;
`
const ThreadedComp = styled.div`
    position:relative;
    height:60vh;
    width:60vh;
    overflow:hidden;
    @media screen and (max-width: 769px){
        height:30vh;
        width:30vh;
    }
    @media screen and (max-width: 420px){
        margin-top: var(--gutter-xl);
        margin-left: -10vw;
        height:40vh;
        width:40vh;
    }
`;
const ThreadedLayer = styled.div`
    position:absolute;
    top:-10vh;
    left:0;
    right:0;
    bottom:0;
    background-size:auto 60vh;
    background-repeat:none;
    @media screen and (max-width: 769px){
        top:-5vh;
        background-size:auto 30vh;
    }
    @media screen and (max-width: 420px){
        background-size:auto 40vh;
    }
`;
const Mask = styled(ThreadedLayer)`
    z-index:3;
    background-image: url(${ThreadedMask});
`
const Thread = styled(ThreadedLayer)`
    left:60vh;
    z-index:2;
    background-image: url(${ThreadedImage});
`
const Background = styled(ThreadedLayer)`
    z-index:1;
    background-image: url(${ThreadedBg});
`

const Craft = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "-10% center",
                end: "50% center",
                scrub: true,
                markers: false
            }
        }).to(element.querySelector(".thread"),{
            left:'0'
        })
    }, []);

    return(
        <Section ref={ref}>
            <Left>
                <h2>CRAFT<br/>IS KING.</h2>
                <p>Each piece is lathe turned, threaded, sanded, and polished by — wait for it — our hands.
    Production runs are currently limited to small batches.</p>
                <Button type="Link" to="#" color="light">ORDER INQUIRY</Button>
            </Left>
            <Right>
                <ThreadedComp>
                <Mask className="mask"/>
                <Thread className="thread"/>
                <Background/>
                </ThreadedComp>
            </Right>
        </Section>
    );
}
export default Craft;