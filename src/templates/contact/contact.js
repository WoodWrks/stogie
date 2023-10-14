import React from "react"
import styled from 'styled-components';

const Section = styled.section`
    position:relative;
    background: ${( {theme} ) => theme.neutralBackground2};
    img{
        width:100%;
        height:auto;
    }    
    padding: 2.5vh 0;
`;

const Contact = () => {

    const handleSubmit = (event) => {
        alert('Form was submitted');
        event.preventDefault();
    }

    return(
        <Section>
            <form onSubmit={handleSubmit} netlify>
                <label>
                    First Name:
                    <input name="firstname" type="text" />
                </label>
                <label>
                    First Name:
                    <input name="firstname" type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </Section>
    );
}
export default Contact;