// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Route
// app.post("/send", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, message: "All fields required" });
//   }

//   try {
//     // Configure SMTP transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false, // Number(process.env.SMTP_PORT) === 465, // true for port 465 | false for port 587
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Send email
//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: process.env.EMAIL_USER,
//       subject: "New Contact Form Message",
//       text: message,
//       html: `<p>${message}</p>`,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ success: false, message: "Email failed to send" });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));





import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SibApiV3Sdk from "@sendinblue/client";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Set Brevo API key
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

const brevoClient = new SibApiV3Sdk.TransactionalEmailsApi();

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  try {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
      sender: { email: process.env.SENDER_EMAIL, name: "Revolt Club" },
      to: [{ email: process.env.SENDER_EMAIL, name: "Club Admin" }],
      replyTo: { email, name },
      subject: "New Contact Form Message",
      htmlContent: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    await brevoClient.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Brevo error:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

