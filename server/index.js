const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your preferred email service
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
    },
});

// Endpoint to handle form submissions
app.post('/api/submit-enquiry', async (req, res) => {
    try {
        const { name, email, phone, interestedTour, travelPackage, travelDate, message } = req.body;

        // Format the travel date
        let formattedDate = '';
        if (travelDate?.from) {
            const fromDate = new Date(travelDate.from).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            if (travelDate.to) {
                const toDate = new Date(travelDate.to).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                formattedDate = `${fromDate} - ${toDate}`;
            } else {
                formattedDate = fromDate;
            }
        }

        // Email content
        const emailContent = `
      <h2>New Durga Puja Tour Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Interested Tour:</strong> ${interestedTour}</p>
      ${travelPackage ? `<p><strong>Travel Package:</strong> ${travelPackage}</p>` : ''}
      ${formattedDate ? `<p><strong>Travel Date:</strong> ${formattedDate}</p>` : ''}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `;

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'mail@spectrainfo.in',
            subject: `New Durga Puja Tour Enquiry from ${name}`,
            html: emailContent,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Enquiry submitted successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to submit enquiry. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
