import React, {useRef, useState} from "react"
import styled from 'styled-components';
import InputButton from "../../components/inputbutton";

const Section = styled.section`
    position:relative;
    background: ${( {theme} ) => theme.neutralBackground2};
    img{
        width:100%;
        height:auto;
    }    
    padding: 2.5vh 0 15vh;
    form{
        margin:0 auto;
        width:50vw;
    }
`;
const FormRow = styled.div`
    display:flex;
    &.centered{
        margin-top:var(--gutter-md);
        justify-content: center;
    }
    label{
        flex:1 0;
        font-size: var(--font-xs);
        margin:var(--gutter-xs) var(--gutter-xxs);
        span span{
            font-size: var(--font-xxs);
            color: ${( {theme} ) => theme.neutralForeground3};
        }
    }
    input[type='text']{
        display:block;
        width:100%;
        font-size: var(--font-md);
        border-radius: var(--borderRadius-xs);
        margin: var(--gutter-xxs) 0 0;
        padding: var(--gutter-xs) var(--gutter-sm);
        border:1px solid ${( {theme} ) => theme.neutralStroke2};
        background: ${( {theme} ) => theme.neutralBackground1};
    }
`;

const Contact = () => {
    const contactForm = useRef(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async event => {
        event.preventDefault();
        let formData = new FormData(event.target);
        
        try {
            const response = await fetch('https://nodejs-resend-endpoint-git-main-jasonjgeiger.vercel.app/api/email', {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                // mode: 'no-cors', 
                // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: "omit", // include, *same-origin, omit
                // redirect: "follow", // manual, *folslow, error
                // referrer: "client", // no-referrer, *client
                body: new URLSearchParams(formData),
            })
    
            const answer = await response.json()
            console.log(answer.data);
            console.log(answer.body);
        } catch (err) {
            console.log(err);
            alert('Error connecting to backend. Try again later.', err);
        }
    }

    return(
        <Section>
            <form ref={contactForm} method="POST" onSubmit={handleSubmit}>
                <FormRow>
                    <label>
                        <span>First Name <span>(required)</span></span>
                        <input name="firstname" type="text" required value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </label>
                    <label>
                        <span>Last Name <span>(required)</span></span>
                        <input name="lastname" type="text" required value={lastName} onChange={e => setLastName(e.target.value)} />
                    </label>
                </FormRow>
                <FormRow>
                <label>
                    <span>Email Address <span>(required)</span></span>
                    <input name="from" type="text" value={from} required onChange={e => setFrom(e.target.value)} />
                </label>
                </FormRow>
                <FormRow>
                    <label>
                    <span>Subject <span>(required)</span></span>
                        <input name="subject" type="text" value={subject} required onChange={e => setSubject(e.target.value)} />
                    </label>
                </FormRow>
                <FormRow>
                    <label>
                        <span>Message <span>(required)</span></span>
                        <input name="message" type="text" value={message} onChange={e => setMessage(e.target.value)} />
                    </label>
                </FormRow>
                <FormRow className="centered">
                    <InputButton color="dark" value="Submit" />
                </FormRow>
                
            </form>
        </Section>
    );
}
export default Contact;