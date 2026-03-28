import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    inquiryType: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        const { name, email, company, phone, inquiryType, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const htmlBody = `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #111827; padding: 32px; border-radius: 16px 16px 0 0;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
                </div>
                <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 140px;">Name</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #111827; font-weight: 600; font-size: 14px;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #111827; font-weight: 600; font-size: 14px;">
                                <a href="mailto:${email}" style="color: #2E7D32; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        ${company ? `<tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Company</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #111827; font-weight: 600; font-size: 14px;">${company}</td>
                        </tr>` : ""}
                        ${phone ? `<tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Phone</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #111827; font-weight: 600; font-size: 14px;">${phone}</td>
                        </tr>` : ""}
                        ${inquiryType ? `<tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Inquiry Type</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                                <span style="background: #e8f5e9; color: #2E7D32; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${inquiryType}</span>
                            </td>
                        </tr>` : ""}
                    </table>
                    <div style="margin-top: 24px; padding: 20px; background: #f8fafc; border-radius: 12px;">
                        <p style="color: #64748b; font-size: 13px; margin: 0 0 8px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                        <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            </div>
        `;

        await transporter.sendMail({
            from: `"Carat Logic Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL_TO,
            replyTo: email,
            subject: `${inquiryType || "Contact Form"} — ${name}`,
            html: htmlBody,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
