// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body || {};
    if (!email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // ENV-based configuration for easy switching
    const provider = process.env.EMAIL_PROVIDER || 'zoho'; // 'gmail' or 'zoho'

    // ---- SMTP CONFIG ----
    let smtpConfig;

    if (provider === 'gmail') {
        smtpConfig = {
            service: 'gmail', // nodemailer built-in Gmail config
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.gmailappemail, //senderemail,
                pass: process.env.gmailapppassword, // use App Password (not your regular Gmail password)
            },
        };
    } else {
        // default to Zoho
        smtpConfig = {
            host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com', // or smtppro.zoho.com for org
            port: 465,
            secure: true,
            auth: {
                user: process.env.senderemailzoho,
                pass: process.env.senderpasswordzoho,
            },
            tls: { rejectUnauthorized: false },
        };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
        ...smtpConfig,
        logger: true,
        debug: true,
    });

    console.log("smtpConfig", smtpConfig)

    // ---- EMAIL CONTENT ----
    const mailOptions = {
        from: `"${name ?? 'Website Contact'}" <${process.env.senderemail}>`,
        to: process.env.receiveremail,
        replyTo: email,
        subject: `New contact form message${name ? ` from ${name}` : ''}`,
        text: `Name: ${name || '—'}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name || '—'}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    try {
        await transporter.verify();
        console.log('✅ SMTP connection verified.');

        const info = await transporter.sendMail(mailOptions);
        console.log('📨 Message sent:', info.messageId);

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('❌ Send mail error:', err);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
