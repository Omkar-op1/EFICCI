const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // No-reply email
            pass: process.env.EMAIL_PASS  // Use an App Password
        }
    });

    try {
        await transporter.sendMail({
            from: '"No Reply" <your_no_reply_email@gmail.com>',
            to: 'ordhatrak855@gmail.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error sending email' });
    }
}
