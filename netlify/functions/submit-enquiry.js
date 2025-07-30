const { Resend } = require('resend');

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        console.log('Received enquiry submission:', event.body);

        // Check API key presence
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is missing');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ success: false, message: 'Server configuration error: Email API key missing.' })
            };
        }

        const { name, email, phone, interestedTour, travelPackage, travelDate, numberOfPeople, message } = JSON.parse(event.body);

        // Enhanced validation
        const validationErrors = [];

        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            validationErrors.push('Name is required');
        }

        if (!email || typeof email !== 'string' || !email.includes('@')) {
            validationErrors.push('Valid email is required');
        }

        if (!phone || typeof phone !== 'string' || phone.trim().length < 10) {
            validationErrors.push('Valid phone number is required');
        }

        if (!interestedTour || typeof interestedTour !== 'string') {
            validationErrors.push('Interested tour is required');
        }

        // Only require travel date if not "other" tour
        if (interestedTour !== "other" && (!travelDate || typeof travelDate !== 'object' || !travelDate.from)) {
            validationErrors.push('Travel date is required');
        }

        if (typeof numberOfPeople !== "number" || numberOfPeople < 1 || numberOfPeople > 100) {
            validationErrors.push('Number of people must be between 1 and 100');
        }

        // Check if travel package is required
        if (interestedTour === "tour-packages" && (!travelPackage || typeof travelPackage !== 'string')) {
            validationErrors.push('Travel package is required for tour packages');
        }

        if (validationErrors.length > 0) {
            console.error('Validation errors:', validationErrors);
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    success: false,
                    message: 'Validation failed: ' + validationErrors.join(', '),
                    errors: validationErrors
                })
            };
        }

        // Format the travel date
        let formattedDate = '';
        if (travelDate?.from) {
            try {
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
            } catch (dateError) {
                console.error('Date formatting error:', dateError);
                formattedDate = 'Invalid date format';
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

        try {
            // Send email to admin
            const resendResult = await resend.emails.send({
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

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, message: 'Enquiry submitted successfully!' })
            };
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            return {
                statusCode: 502,
                headers,
                body: JSON.stringify({
                    success: false,
                    message: 'Failed to send email. Please try again.',
                    error: emailError?.message || 'Email service error'
                })
            };
        }
    } catch (error) {
        console.error('Error processing enquiry:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                message: 'Failed to process enquiry. Please try again.',
                error: error?.message || error
            })
        };
    }
};
