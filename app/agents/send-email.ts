import { createTransport, type SendMailOptions } from "nodemailer";

export const sendEmail = async (options: SendMailOptions): Promise<void> => {
  const port = parseInt(process.env.NODEMAILER_PORT as string, 10);
  const transporter = createTransport({
    host: process.env.NODEMAILER_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  //   transporter.verify((error) => {
  //     if (error) {
  //       console.log({ error });

  //       if (error instanceof Error) {
  //         throw error.message;
  //       }

  //       throw new Error("Failed to connect to the email server");
  //     }
  //     console.log("Server is ready to take our messages");
  //   });

  transporter.sendMail(options, (error) => {
    if (error) {
      if (error instanceof Error) {
        throw error.message;
      }

      throw new Error("Failed to connect to the email server");
    }
  });
};

export const contactUsConfirmationTemplate = (
  name: string,
  message: string
): string => {
  const html = `
        <html>
            <head>
                <style>
                    /* Add your custom CSS styles here */
                </style>
            </head>
            <body>
                <h3>Thank you for contacting us, ${name}!</h3>
                <p>We have received your message:</p>
                <p>${message}</p>
                <p>We will get back to you as soon as possible.</p>
                <p>Best regards,</p>
                <p>The Contact Us Team</p>
            </body>
        </html>
    `;
  return html;
};

export const contactUsRequestTemplate = (
  name: string,
  message: string
): string => {
  const html = `
        <html>
            <head>
                <style>
                    /* Add your custom CSS styles here */
                </style>
            </head>
            <body>
                <h3>Message from ${name}</h3>
                <p>${message}</p>
            </body>
        </html>
    `;
  return html;
};
