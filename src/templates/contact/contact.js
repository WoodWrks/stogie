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
    const handleSubmit = async event => {
        event.preventDefault();

        let formData = new FormData(event.target);
        formData.append('to', event.target.emailaddress.value);
        formData.append('from', event.target.emailaddress.value);
        formData.append('subject', 'Website contact from: '+event.target.firstname.value+" "+event.target.lastname.value);
        formData.append('parameters', {
            'firstname':        event.target.firstname.value,
            'lastname':         event.target.lastname.value,
            'emailaddress' :    event.target.emailaddress.value,
            'subject':          event.target.subject.value,
            'message':          event.target.message.value,
        });
        
        try {

            const response = await fetch('https://react-email-resend-coral-beta.vercel.app/api/contact', {
                method: "POST",
                mode: 'no-cors', 
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "omit", // include, *same-origin, omit
                headers: { "Content-Type": "application/json" },
                redirect: "follow", // manual, *folslow, error
                referrer: "client", // no-referrer, *client
                body: JSON.stringify(formData),
                parameters: {
                    'firstname':        event.target.firstname.value,
                    'lastname':         event.target.lastname.value,
                    'emailaddress' :    event.target.emailaddress.value,
                    'subject':          event.target.subject.value,
                    'message':          event.target.message.value,
                }
            })
    
            const answer = await response.json()
    
            if (answer.success) {
                alert(answer.message)
            }else {
                alert(answer.errors[0].msg)
            }
        } catch (err) {
                alert('Error connecting to backend:', err);
        }
    }

    return(
        <Section>
            <form ref={contactForm} method="POST" onSubmit={handleSubmit}>
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