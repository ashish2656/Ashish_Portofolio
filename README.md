# Ashish Dodiya Portfolio Website

A full-stack portfolio website showcasing skills, projects, and experience with a custom backend for the contact form.

## Project Structure

- `ashish-portfolio/` - Frontend React application built with Vite, React, and TailwindCSS
- `backend/` - Express.js backend API for handling contact form submissions

## Technologies Used

### Frontend
- React with TypeScript
- Vite for building and development
- TailwindCSS for styling
- Framer Motion for animations
- React Icons
- React Router DOM

### Backend
- Node.js with Express
- Nodemailer for email handling
- CORS for cross-origin support
- dotenv for environment variables

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd mern-portfolio
```

2. Install all dependencies
```bash
npm run install-all
```

3. Configure the backend
```bash
# Create a .env file in the backend directory
cd backend
cp .env.example .env
# Edit the .env file with your email credentials
```

### Running in Development

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run them separately:
- Frontend: `npm run client`
- Backend: `npm run server`

### Building for Production

```bash
npm run build
```

This will build the React frontend application. The backend doesn't require a build step.

### Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Features

- Responsive design that works on all device sizes
- Modern UI with smooth animations
- Interactive sections for About, Skills, Projects, Experience
- Working contact form with email integration
- Social media integration

## Backend API

The backend provides an API for handling contact form submissions:

- `POST /api/contact` - Submit a contact form message

## Customization

- Update personal information and projects in the frontend components
- Modify email templates in the backend
- Add additional API endpoints as needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- CSS Framework: [TailwindCSS](https://tailwindcss.com/)
- Email Service: [Nodemailer](https://nodemailer.com/) 