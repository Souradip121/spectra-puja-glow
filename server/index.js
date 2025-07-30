const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Resend configuration
const resend = new Resend(process.env.RESEND_API_KEY);

// Endpoint to handle form submissions
app.post('/api/submit-enquiry', async (req, res) => {
    console.log('Received enquiry submission:', JSON.stringify(req.body, null, 2));
    // Check API key presence
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return res.status(500).json({ success: false, message: 'Server configuration error: Email API key missing.' });
    }
    try {
        const { name, email, phone, interestedTour, travelPackage, travelDate, numberOfPeople, message } = req.body;

        // Validate required fields - make travelDate optional for "other" tours
        if (
            !name ||
            !email ||
            !phone ||
            !interestedTour ||
            (interestedTour !== "other" && !travelDate?.from) ||
            typeof numberOfPeople !== "number" ||
            numberOfPeople < 1 ||
            numberOfPeople > 100
        ) {
            console.error('Missing or invalid required fields:', { name, email, phone, interestedTour, travelDate, numberOfPeople });
            return res.status(400).json({ success: false, message: 'Missing or invalid required fields.' });
        }

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
            <p><strong>Number of People:</strong> ${numberOfPeople}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            <hr>
            <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `;

        console.log('Sending email with content:', emailContent);

        // Send email to admin and user
        let resendResult;
        try {
            // Send to admin
            resendResult = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'mail@spectrainfo.in',
                subject: `New Durga Puja Tour Enquiry from ${name}`,
                html: emailContent,
            });
            console.log('Resend API response (admin):', resendResult);

            // Send copy to user
            const userResult = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: email,
                subject: `Copy of your Durga Puja Tour Enquiry`,
                html: `
                    <p>Dear ${name},</p>
                    <p>Thank you for your enquiry. Here is a copy of your submission:</p>
                    ${emailContent}
                    <p>We will get back to you soon!</p>
                `,
            });
            console.log('Resend API response (user):', userResult);
        } catch (sendError) {
            console.error('Resend API error:', sendError);
            return res.status(502).json({ success: false, message: 'Email service error.' });
        }

        // Check for errors in resendResult if applicable
        if (resendResult && resendResult.error) {
            console.error('Resend API returned error:', resendResult.error);
            return res.status(502).json({ success: false, message: 'Email service error.' });
        }

        console.log('Email sent successfully.');
        res.status(200).json({ success: true, message: 'Enquiry submitted successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        if (error && error.stack) {
            console.error('Error stack:', error.stack);
        }
        res.status(500).json({ success: false, message: 'Failed to submit enquiry. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
