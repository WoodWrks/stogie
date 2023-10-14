import React, {useRef, useState} from "react"
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
const FormRow = styled.div`
    display:flex;
    label{
        flex:1 0;
    }
`;

const Contact = () => {
    const contactForm = useRef(null);
    const [firstName, setFirstName] = useState('Doodle');
    const [lastName, setLastName] = useState('Bigsby');
    const [emailAddress, setEmailAddress] = useState('generalInquiry@130public.net');
    const [subject, setSubject] = useState('Hello I am interested');
    const [message, setMessage] = useState('Please include me on the next order.');
    const handleSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData();

        formData.append('firstname', event.target.firstname.value);
        formData.append('lastname', event.target.lastname.value);
        formData.append('emailaddress', event.target.emailaddress.value);
        formData.append('subject', event.target.subject.value);
        formData.append('message', event.target.message.value);
        
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
            <form ref={contactForm} onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify="">
            <input type="hidden" name="form-name" value="contact" />
                <FormRow>
                    <label>
                        First Name:
                        <input name="firstname" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </label>
                    <label>
                        Last Name:
                        <input name="lastname" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </label>
                </FormRow>
                <FormRow>
                <label>
                    Email Address:
                    <input name="emailaddress" type="text" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
                </label>
                </FormRow>
                <FormRow>
                    <label>
                        Subject:
                        <input name="subject" type="text" value={subject} onChange={e => setSubject(e.target.value)} />
                    </label>
                </FormRow>
                <FormRow>
                    <label>
                        Message:
                        <input name="message" type="text" value={message} onChange={e => setMessage(e.target.value)} />
                    </label>
                </FormRow>
                <input type="submit" value="Submit" />
            </form>
        </Section>
    );
}
export default Contact;