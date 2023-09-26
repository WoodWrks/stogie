import React from "react"
import styled from 'styled-components';
import Divide from "../../components/divide";

import Hugh from '../../assets/images/hugh.jpg';

const Section = styled.section`
    position:relative;
    background: ${( {theme} ) => theme.neutralBackground2};
    img{
        width:100%;
        height:auto;
    }
`;
const Content = styled.div`
    padding: var(--gutter-xl) var(--gutter-lg);
`

const About = () => {
    return(
        <Section>
            <Divide position="top"/>
            <Content>
                <img src={Hugh} />
            </Content>
        </Section>
    );
}
export default About;