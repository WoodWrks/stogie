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
        event.preventDefault();
        
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    }

    return(
        <Section>
            <form onSubmit={handleSubmit} name="contact" method="POST" netlify="">
                
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