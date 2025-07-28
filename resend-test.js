require('dotenv').config();
const { Resend } = require('resend');

// Verify API key
if (!process.env.RESEND_API_KEY) {
    console.error('ERROR: RESEND_API_KEY environment variable is not set');
    process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);

const SENDER_EMAIL = process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev';
const TEST_RECIPIENT = process.env.TEST_RECIPIENT || 'mail@spectrainfo.in';

async function testResendAPI() {
    console.log('Testing Resend API...');
    console.log(`Using sender email: ${SENDER_EMAIL}`);
    console.log(`Sending test email to: ${TEST_RECIPIENT}`);

    try {
        const { data, error } = await resend.emails.send({
            from: SENDER_EMAIL,
            to: [TEST_RECIPIENT],
            subject: 'Resend API Test',
            html: '<strong>This is a test email from the Resend API.</strong>',
        });

        if (error) {
            console.error('ERROR: Failed to send email:', error);
            return;
        }

        console.log('SUCCESS: Email sent successfully!');
        console.log('Email ID:', data.id);
    } catch (err) {
        console.error('EXCEPTION: Error sending email:', err);
    }
}

testResendAPI();
