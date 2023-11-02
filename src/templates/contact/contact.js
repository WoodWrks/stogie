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
    padding: 15vh 0 15vh;
    form{
        margin:0 auto;
        width:50vw;
        @media screen and (max-width: 641px){
            width:80%;
        }


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
    input[type='text'],
    input[type='email']{
        display:block;
        width:100%;
        font-size: var(--font-md);
        border-radius: var(--borderRadius-xs);
        margin: var(--gutter-xxs) 0 0;
        padding: var(--gutter-xs) var(--gutter-sm);
        border:1px solid ${( {theme} ) => theme.neutralStroke2};
        background: ${( {theme} ) => theme.neutralBackground1};
        &{::placeholder {
            color: ${( {theme} ) => theme.neutralStroke2};
        }
    }
`;
const StatusMessage = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
    margin-bottom:var(--gutter-md);
    padding:var(--gutter-xs);
    border:2px solid ${( {theme} ) => theme.neutralStroke2};
    border-radius: var(--borderRadius-xs);
    background: ${( {theme} ) => theme.neutralBackground2};
    text-align:center;
`

const FormStatus = (props) => {
    
    if(props.status === 'sending'){
        return <StatusMessage>Sending</StatusMessage>
    }else if (props.status === 'sent'){
        return <StatusMessage>Sent</StatusMessage>
    }else if (props.status === 'error'){
        return <StatusMessage>Failed to send. There is an error with the server, please try again later</StatusMessage>
    }else {
        return '';
    }
}

const Contact = () => {
    const contactForm = useRef(null);
    const [formAction,setFormAction] = useState('');
    const [showStatus,setShowStatus] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        let formData = new FormData(event.target);
        setFormAction('sending');
        setShowStatus(true);
        
        try {
            const response = await fetch('https://stogie-resend-endpoint.vercel.app/api/email', {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData),
            })
            
            const answer = await response.json();
            setFormAction('sent');
            setTimeout(() => {
                setShowStatus(false);
            }, 6000);
            console.log(answer.data);
            // console.log(answer.body);
        } catch (err) {
            setFormAction('error');
            setTimeout(() => {
                setShowStatus(false);
            }, 6000);
            console.log(err);
            //alert('Error connecting to backend. Try again later.', err);

        }
    }

    return(
        <Section id="contact">    
            {showStatus &&
                <FormStatus status={formAction}  />
            }
            <form ref={contactForm} method="POST" onSubmit={handleSubmit}>
                <FormRow>
                    <label>
                        <span>First Name <span>(required)</span></span>
                        <input name="firstname" type="text" required value={firstName} placeholder="" onChange={e => setFirstName(e.target.value)} />
                    </label>
                    <label>
                        <span>Last Name <span>(required)</span></span>
                        <input name="lastname" type="text" required value={lastName} placeholder="" onChange={e => setLastName(e.target.value)} />
                    </label>
                </FormRow>
                <FormRow>
                <label>
                    <span>Email Address <span>(required)</span></span>
                    <input name="from" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={from} required placeholder="" onChange={e => setFrom(e.target.value)} />
                </label>
                </FormRow>
                <FormRow>
                    <label>
                    <span>Subject <span>(required)</span></span>
                        <input name="subject" type="text" value={subject} required placeholder="" onChange={e => setSubject(e.target.value)} />
                    </label>
                </FormRow>
                <FormRow>
                    <label>
                        <span >Message <span>(required)</span></span>
                        <input name="message" type="text" value={message} required placeholder="" onChange={e => setMessage(e.target.value)} />
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