import {
  sendEmail,
  contactUsRequestTemplate,
  contactUsConfirmationTemplate,
} from "@/app/agents/send-email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const contactEmail = process.env.NODEMAILER_USER as string;

    await sendEmail({
      from: email,
      to: contactEmail,
      subject: "Contact Request",
      html: contactUsRequestTemplate(name, email, message),
    });

    await sendEmail({
      from: contactEmail,
      to: email,
      subject: "Message received",
      html: contactUsConfirmationTemplate(name, message),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
