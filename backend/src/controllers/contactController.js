const { sendEmail } = require('../utils/emailService');

/**
 * Send contact email
 * @route POST /api/contact
 * @access Public
 */
const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please provide name, email, and message' 
      });
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
      to: process.env.EMAIL_TO,
      subject: emailSubject,
      html: htmlContent,
      replyTo: email
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
};

module.exports = {
  sendContactEmail
}; 