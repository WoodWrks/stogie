import React from "react"
import styled from 'styled-components';
import Divide from "../../components/divide";

import Hugh from '../../assets/images/hugh.jpg';
import Button from "../../components/button";
import SocialProfiles from "../../components/socialprofiles/socialprofiles";
const Section = styled.section`
    position:relative;
    background: ${( {theme} ) => theme.neutralBackground2};
    img{
        width:100%;
        height:auto;
    }    
    padding: 20vh 0;
    @media screen and (max-width: 769px){
        padding: 10vh 0;
    }
`;
const ImageContent = styled.div`
    padding: var(--gutter-sm) var(--gutter-lg) var(--gutter-sm);
    @media screen and (max-width: 769px){
        padding: 0 var(--gutter-md) var(--gutter-sm);
    }
`;
const Content = styled.div`
    margin:0 auto;
    display:flex;
    width: 70vw;
    padding: var(--gutter-md) 0 0;
    @media screen and (max-width: 769px){
        width: 80vw;
        flex-direction: column;
        padding: var(--gutter-sm) 0 0;
    }
`
const Left = styled.div`
    flex: 1 0;
    padding: 0 var(--gutter-lg) 0 0;
    h1{
        margin:0;
        padding: 0;
        font-family:var(--theme-font-secondary);
        font-size:var(--font-xxxl);
        line-height:100%;
        color: ${( {theme} ) => theme.neutralForeground1};
        text-transform:uppercase;
    }
    @media screen and (max-width: 769px){
        padding: 0 0 var(--gutter-md) 0;
        br{display: none;}
    }
`

const Right = styled.div`
    flex: 2 0;
    padding: 0;
    h2{
        margin:0;
        padding:0;
        font-family:var(--theme-font-secondary);
        font-size:var(--font-xl);
        line-height:100%;
        color: ${( {theme} ) => theme.neutralForeground1};
        text-transform:uppercase;
    }
    p{
        margin:var(--gutter-sm) 0 var(--gutter-md);
        padding:0;
        color: ${( {theme} ) => theme.neutralForeground1};
        font-family:var(--theme-font-primary);
        font-size:var(--font-md);
    }
`

const CTAs = styled.div`
    display:flex;
    align-items: center;
    *{
        margin-right:var(--gutter-md);
    }
`

const About = () => {
    return(
        <Section>
            <Divide position="top"/>
            <ImageContent>
                <img src={Hugh} />
            </ImageContent>
            <Content>
                <Left>
                <h1>MEET <br/>YOUR <br/>MAKER.</h1>
                </Left>
                <Right>
                    <h2>Husband. Father. legend in his own mind. And yes - he got's chops. 'Nuff said.</h2>
                    <p>Founded by self-taught craftsman Hugh Mulligan in 2016, Gots Chops WoodWrks is a small Arizona based studio that designs and builds finely crafted modern furniture & goods. For some, creativity can be a curse as much as it can a gift and this uncontrollable compulsion to achieve perfection can be a physically, mentally, and emotionally crushing endeavor. We here at WoodWrks don't subscribe to such frippery and drivel, however. We absolutely enjoy the f%@ out of creating things!</p>
                    <p>Because when the last drop of blood has been shed and the final coat of finish buffed, you end up with a "thing." A tangible, measurable, useful, beautiful...thing. Creating and building these things is an incredible journey - and one we have the privilege of sharing with our clients. So sit back, relax, and enjoy the ride.</p>
                    <p>See us in action on Instagram or feel free to contact us with new work inquiries, burning questions, high-praise, facial hair advice, or anything else you'd like to chat about. We're always taking new work and we'd love to hear from you. In Chops We Trust. Thanks!</p>
                    <CTAs><Button color="dark">Give us a shout</Button> <SocialProfiles iconSize={'2.6rem'} /></CTAs>
                </Right>
            </Content>
        </Section>
    );
}
export default About;