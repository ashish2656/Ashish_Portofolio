# Portfolio Backend Server

A Node.js/Express backend for Ashish Dodiya's portfolio website, handling contact form submissions and email delivery.

## Features

- REST API for handling contact form submissions
- Email sending using Nodemailer
- Environment variable configuration
- CORS support for frontend integration

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   NODE_ENV=development
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=ashishdodiya2656@gmail.com
   CORS_ORIGIN=http://localhost:5173
   ```

   **Note for Gmail users:** You'll need to use an app password instead of your regular password. See [Google's documentation](https://support.google.com/accounts/answer/185833) for how to create an app password.

## Running the server

### Development mode

```
npm run dev
```

This starts the server with nodemon, which will automatically restart when you make changes.

### Production mode

```
npm start
```

## API Endpoints

### Contact Form Submission

**POST /api/contact**

Send a message from the contact form.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project opportunity."
}
```

Response:
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

## Deployment

For production deployment, consider using a platform like:
- Heroku
- DigitalOcean
- AWS Elastic Beanstalk
- Render
- Railway

Make sure to set the environment variables in your production environment. 