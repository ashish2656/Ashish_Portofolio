import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/ashish-dodiya-645873339/', label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, url: 'https://x.com/d39739778', label: 'Twitter' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:your.email@example.com', label: 'Email' },
  ]

  return (
    <footer className="relative z-10 border-t border-gray-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-white">Ashish</span>
                <span className="gradient-text">.dev</span>
              </h3>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate MERN stack developer and DSA enthusiast dedicated to creating 
              beautiful, functional, and high-performance web applications.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Indore, MP, India</p>
            <p className="text-gray-400 mb-2">your.email@example.com</p>
            <motion.button
              className="px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue rounded-md text-white mt-4 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ashish Dodiya. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 