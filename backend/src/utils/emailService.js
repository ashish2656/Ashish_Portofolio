const nodemailer = require('nodemailer');

/**
 * Create email transporter 
 * @returns {object} Nodemailer transporter
 */
const createTransporter = () => {
  // For development/testing, you can use a service like Mailtrap or Gmail
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use an app password if using Gmail
    }
  });
};

/**
 * Send email
 * @param {object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @param {string} [options.text] - Email plain text content
 * @param {string} [options.replyTo] - Reply-to email
 * @returns {Promise} Email sending result
 */
const sendEmail = async ({ to, subject, html, text, replyTo }) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Ashish Dodiya Portfolio" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      text,
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

module.exports = {
  sendEmail
}; 