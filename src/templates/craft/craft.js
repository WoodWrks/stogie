import React from "react"
import styled from 'styled-components';
import Button from "../../components/button";

import CloseUp from '../../assets/images/craft-closeup.jpg';

const Section = styled.section`
    display:flex;
    margin: 0 auto;
    padding: 20vh 0;
    width: 70vw;
`;
const Left = styled.div`
    flex: 1 0;
    padding: 0 var(--gutter-lg) 0 0;
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
    img{
        height:80%;
        width:80%;
    }
`

const Craft = () => {
    return(
        <Section>
            <Left>
                <h2>CRAFT<br/>IS KING.</h2>
                <p>Each piece is lathe turned, threaded, sanded, and polished by — wait for it — our hands.
    Production runs are currently limited to small batches.</p>
                <Button>ORDER INQUIRY</Button>
            </Left>
            <Right>
                <img src={CloseUp} />
            </Right>
        </Section>
    );
}
export default Craft;