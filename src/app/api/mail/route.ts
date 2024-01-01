import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string;
};

const mailFn = async () => {
  console.log("Message sent: Hello", info.messageId);
};

export async function POST(request: Request) {
  let formData = await request.formData();
  if (
    formData.get("name") &&
    formData.get("email") &&
    formData.get("phone") &&
    formData.get("text")
  ) {
    let name = formData.get("name");
    let email = formData.get("email");
    let phone = formData.get("phone");
    let text = formData.get("text");
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: `"Web Query 👻" <${process.env.MAIL_FROM}>`, // sender address
      to: process.env.MAIL_TO, // list of receivers
      subject: "Project Discussion ✔", // Subject line
      //   text: "Project Discussion", // plain text body
      html: `<ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>phone: ${phone}</li>
      <li>message:</li>
      <p>${text}</p>
    </ul>`,
    });
    if (info.accepted.length > 0) {
      return Response.json({
        message: "Message Send Successfully, We will contact you shortly",
      });
    } else {
      return Response.json({ message: "Message Not Sent, Server Error!" });
    }
  } else {
    return Response.json({ error: "Something went wrong" });
  }
}
