import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY is not set");
}
sgMail.setApiKey(apiKey);

export async function POST(req: Request) {
  try {
    const { first_name, last_name, email, message } = await req.json();

    const msg = {
      to: "dragan.ignjatovic.student@gmail.com", // Your receiving email
      from: "dragan.ignjatovic.student@gmail.com", // Verified sender email
      subject: `Nova poruka od ${first_name} ${last_name}`,
      text: message,
      html: `<p><strong>Ime:</strong> ${first_name} ${last_name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Poruka:</strong><br/>${message}</p>`,
    };

    await sgMail.send(msg);
    // console.log("Email sent successfully:", message);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
    } else {
      console.error("Unknown error occurred:", error);
    }
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
