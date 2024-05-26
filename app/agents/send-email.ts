import { createTransport } from "nodemailer";
import type { Transporter, SendMailOptions } from "nodemailer";
import { escape } from "querystring";

const configTransporter = (): Transporter => {
  const port = parseInt(process.env.NODEMAILER_PORT as string, 10);
  return createTransport({
    host: process.env.NODEMAILER_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
};

export const verifyTransporter = async (): Promise<void> => {
  const transporter = configTransporter();
  transporter.verify((error) => {
    if (!error) {
      console.log("Server is ready to take our messages");
      return;
    }

    if (error instanceof Error) {
      throw error.message;
    }

    throw new Error("Failed to connect to the email server");
  });
};

export const sendEmail = async (options: SendMailOptions): Promise<void> => {
  const transporter = configTransporter();
  transporter.sendMail(options, (error) => {
    if (!error) {
      console.log("Email sent successfully");
      return;
    }

    if (error instanceof Error) {
      throw error.message;
    }

    throw new Error("Failed to connect to the email server");
  });
};

export const contactUsConfirmationTemplate = (
  name: string,
  message: string
): string =>
  generateHTML(`
    <h3>¡Gracias por contactarnos, ${name}!</h3>
    <p>Hemos recibido tu mensaje:</p>
    <code style="color: black;">
        <b>${message}</b>
    </code><br />
    <p>Te responderemos lo antes posible.</p>
    <span>Saludos cordiales,<br /> CEOTECH</span>
    ${addSocials}
    `);

export const contactUsRequestTemplate = (
  name: string,
  email: string,
  message: string
): string =>
  generateHTML(`
    <h3>Se ha recibido un nuevo mensaje</h3>
    <code style="color: black;">
        <b>${name} (${email})</b>
        <p>${message}</p>
    </code>
  `);

const generateHTML = (content: string): string => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500%26display=swap"
            rel="stylesheet"
        />
    </head>
    <body style="
        min-height: 100% !important;
        width: 100% !important;
        margin: 0 !important;
        align-items: center;
        background-image: linear-gradient(rgb(30, 41, 59), rgba(0, 0, 0, 0.95));
    ">
        <div style="display: block; margin: 1em auto; text-align: center">
            <a href="https://billfish.org" style="text-decoration: none">
                <img src="https://jfernandez1492.github.io/landing-page-app/CEOTECH/EDITED/ceotech.logo.colored.svg" width="80%" style="max-width: 650px" alt="logo" border="0" />
            </a>
        </div>

        <div style="
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0px auto; 
            background-color: rgb(203 213 225);
            padding: 1em 2em;
            overflow: hidden;
        ">
            <div style="max-width: 650px;">
            ${content}
            </div>
        </div>

        <footer style="text-align: center; display: block; margin: 1em auto">
            <p style="
                font-family: 'Montserrat', sans-serif;
                line-height: 1.5;
                letter-spacing: 0.07px;
                color: white;
            ">
                © ${new Date().getFullYear()} — 
                <a href="${
                  process.env.NEXT_PUBLIC_BASE_PATH
                }" style="margin: 1em 0; color: white; text-decoration: none;">
                    CEOTECH
                </a>
            </p>
            
        </footer>
    </body>
</html>
`;

const addSocials = `
    <p>
        <a href="https://www.facebook.com/ceotechmx" style="text-decoration: none;">
            <img src="https://i.ibb.co/NWcqsm0/facebook-logo-internet-icon.png" alt="facebook icon" border="0"/>
        </a>
        <a href="https://www.linkedin.com/company/ceotechmx" style="text-decoration: none;">
            <img src="https://i.ibb.co/JHC9xXN/linkedin-media-icon.png" alt="linkedin icon" border="0"/>
        </a>
    </p>
`;
