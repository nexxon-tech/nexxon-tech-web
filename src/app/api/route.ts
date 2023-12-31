import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export function GET(request: Request) {
  return Response.json({ name: "Niraj Kumar" });
}

/**
 * 
 * 
 * 
 


const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
        user: "service@nexxontech.com",
        pass: "xZ48fz&aq5EF6Lv",
    },
});

const mailFn = async () => {
    const info = await transporter.sendMail({
        from: '"Web Query 👻" <mail@nexxontech.com>', // sender address
        to: "contact@nexxontech.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: Hello", info.messageId);
};



 * 
 * 
 * 
 */
