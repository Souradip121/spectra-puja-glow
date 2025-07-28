const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration - make sure to add your Netlify domain
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8888',
    'https://spectrainfo.netlify.app'
];

// Improved CORS handling
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            console.log('CORS blocked origin:', origin);
            return callback(null, false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use(express.json());

// Add health check endpoint for debugging
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        env: {
            hasApiKey: !!process.env.RESEND_API_KEY,
            senderEmail: process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev',
            node_env: process.env.NODE_ENV,
            version: '1.0.3'
        }
    });
});

// Resend configuration
const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev';

// Endpoint to handle form submissions
app.post('/api/submit-enquiry', async (req, res) => {
    console.log('Received enquiry submission:', JSON.stringify(req.body, null, 2));

    // Verify API key is available
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return res.status(500).json({ success: false, message: 'Server configuration error: Email API key missing.' });
    }

    try {
        const { name, email, phone, interestedTour, travelPackage, travelDate, numberOfPeople, message } = req.body;

        // Validate required fields
        if (
            !name ||
            !email ||
            !phone ||
            !interestedTour ||
            !travelDate?.from ||
            typeof numberOfPeople !== "number" ||
            numberOfPeople < 1 ||
            numberOfPeople > 50
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

        // Send email to admin first - Using the pattern from Resend documentation
        try {
            console.log('Sending admin email');
            const adminData = await resend.emails.send({
                from: SENDER_EMAIL,
                to: ['mail@spectrainfo.in'],
                subject: `New Durga Puja Tour Enquiry from ${name}`,
                html: emailContent,
            });

            if (!adminData || !adminData.id) {
                throw new Error('Failed to get valid response from Resend API');
            }

            console.log('Admin email sent successfully:', adminData);

            // Then send to user - Using the pattern from Resend documentation
            try {
                console.log('Sending user email');
                const userData = await resend.emails.send({
                    from: SENDER_EMAIL,
                    to: [email],
                    subject: `Copy of your Durga Puja Tour Enquiry`,
                    html: `
                        <p>Dear ${name},</p>
                        <p>Thank you for your enquiry. Here is a copy of your submission:</p>
                        ${emailContent}
                        <p>We will get back to you soon!</p>
                    `,
                });

                console.log('User email sent successfully:', userData);

                return res.status(200).json({
                    success: true,
                    message: 'Enquiry submitted successfully!',
                    adminEmailId: adminData?.id,
                    userEmailId: userData?.id
                });
            } catch (userError) {
                console.error('Failed to send user email:', userError);
                // Still return success since admin email was sent
                return res.status(200).json({
                    success: true,
                    message: 'Enquiry submitted, but confirmation email failed.',
                    adminEmailId: adminData?.id,
                    userEmailError: userError?.message || String(userError)
                });
            }
        } catch (adminError) {
            console.error('Failed to send admin email:', adminError);
            return res.status(502).json({
                success: false,
                message: 'Email service error (admin).',
                error: adminError?.message || String(adminError)
            });
        }
    } catch (error) {
        console.error('Error processing enquiry (outer catch):', error);
        if (error && error.stack) {
            console.error('Error stack:', error.stack);
        }
        res.status(500).json({
            success: false,
            message: 'Failed to process enquiry. Please try again.',
            error: error?.message || String(error),
            stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
console.error('Error stack:', error.stack);


