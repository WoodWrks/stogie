import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    emailaddress: String,
    firstname: string;
    lastname: string;
    subject: string;
    message: String;
  };

  const response = await fetch(`${process.env.URL}/.netlify/functions/emails/contact`, {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET
      },
      method: "POST",
      body: JSON.stringify({
        from: requestBody.emailaddress,
        to: process.env.SERVERADMIN_EMAIL,
        subject: 'Website contact from: '+requestBody.firstname+" "+requestBody.lastname,
        parameters: {
          firstname: requestBody.firstname, 
          lastname: requestBody.lastname,
          emailaddress: requestBody.emailaddress,
          subject: requestBody.subject,
          message: requestBody.message
        },
      }),
    }
  );

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify("Subscribe email sent!"),
  // };
  const {data, errors} = await response.json()
  if (response.ok) {
  } else {
    // handle the graphql errors
    const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
    return Promise.reject(error)
  }
};

export { handler };