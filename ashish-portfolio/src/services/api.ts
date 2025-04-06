/**
 * API configuration and service functions for the portfolio
 */

// Base API URL - defaults to local development, but can be overridden in production
const API_BASE_URL = import.meta.env.VITE_API_URL || '/.netlify/functions';

// Contact form submission
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Send a contact form message
 * @param formData The contact form data
 * @returns Promise with the response data
 */
export const sendContactMessage = async (formData: ContactFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default {
  sendContactMessage,
}; 