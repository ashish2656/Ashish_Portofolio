const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use an app password for Gmail
    }
  });
};

// Send email
const sendEmail = async ({ to, subject, html, replyTo }) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Ashish Dodiya Portfolio" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      replyTo
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

exports.handler = async (event, context) => {
  // Check if not a POST request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: 'Method not allowed' })
    };
  }

  try {
    // Parse the body
    const { name, email, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          error: 'Please provide name, email, and message' 
        })
      };
    }

    // Email content
    const emailSubject = subject || `Portfolio Contact: Message from ${name}`;
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    await sendEmail({
      to: process.env.EMAIL_TO || 'ashishdodiya2656@gmail.com',
      subject: emailSubject,
      html: htmlContent,
      replyTo: email
    });

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully!'
      })
    };

  } catch (error) {
    console.error('Error sending contact email:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Failed to send email. Please try again later.'
      })
    };
  }
}; 