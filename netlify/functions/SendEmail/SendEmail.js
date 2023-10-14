import { sendEmail } from "@netlify/emails";

await sendEmail({
  from: "serveradmin@130public.net",
  to: "jjgeiger@130public.ent",
  subject: "Test!",
  template: "contact",
  parameters: {
    
  },
});