const sendGridMail = require("@sendgrid/mail");

const handler = async (event) => {
  try {
    const { firstname, lastname, emailaddress, subject, message } = JSON.parse(event.body).payload.data;

    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
    const html = `
      <div> 
         Hi ${firstname} ${lastname}! <br><br>
         ${subject}
         ${message}
         <br><br>
         Best <br>
         John Doe
      </div>
    `;
    const mail = {
      from: emailaddress,
      to: process.env.SERVERADMIN,
      subject: `Website message from: ${firstname} ${lastname}`,
      html,
    };
    await sendGridMail.send(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    return { statusCode: 422, body: String(error) };
  }
};

module.exports = { handler };