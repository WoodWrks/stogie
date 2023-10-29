import React from "react";
import styled from 'styled-components';

const Section = styled.section`
    position:relative;
    background: ${( {theme} ) => theme.neutralBackground1};
    img{
        width:100%;
        height:auto;
    }    
`;
const Content = styled.div`
    margin:0 auto;
    display:flex;
    width: 70vw;
    padding: 15vh 0 10vh;
`
const Center = styled.div`
    flex: 2 0;
    padding: 0;
    blockquote{
        margin:0;
        padding:0;
        font-family:var(--theme-font-secondary);
        font-size:var(--font-xl);
        line-height:100%;
        color: ${( {theme} ) => theme.neutralForeground1};
        text-transform:uppercase;
        span{
            display:block;
            text-align:center;
        }
        .yourJohnHancock{
            margin-top: var(--gutter-md);
            text-align:right;
            font-size:var(--font-lg);
        }
    }
`
const Quote = () => {
    return(
        <Section>
            <Content>
                <Center>
                    <blockquote><span>“After more than a decade behind a desk creating visual art as a graphic designer — I realized it was the desk I wanted to be creating all along. And the rest is still being written...”</span><span className="yourJohnHancock">— H.M. Mulligan, I</span></blockquote>
                </Center>
            </Content>
        </Section>
    );
}
export default Quote;