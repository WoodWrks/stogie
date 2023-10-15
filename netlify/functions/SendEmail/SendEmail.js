import { sendEmail } from "@netlify/emails";

await sendEmail({
  from: requestBody.emailaddress,
        to: process.env.SERVERADMIN_EMAIL,
        subject: 'Website contact from: '+requestBody.firstname+" "+requestBody.lastname,
  template: "contact",
  parameters: {
    firstname: requestBody.firstname, 
    lastname: requestBody.lastname,
    emailaddress: requestBody.emailaddress,
    subject: requestBody.subject,
    message: requestBody.message
  },
});