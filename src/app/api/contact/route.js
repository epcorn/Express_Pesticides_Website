import nodemailer from "nodemailer";

export async function POST(req) {
  try {  
    const { firstName , lastName, email, subject,company, issue } = await req.json();

    // ✅ Setup transporter using .env variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for port 465, false for others like 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Mail content
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to your own inbox
      subject: subject || "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName} </p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Company : </strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <p>${issue}</p>
        </div>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
