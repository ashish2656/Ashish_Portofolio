import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: <FaGithub size={18} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ashish-dodiya-645873339/',
      icon: <FaLinkedin size={18} />,
    },
    {
      name: 'Twitter',
      href: 'https://x.com/d39739778',
      icon: <FaTwitter size={18} />,
    },
    {
      name: 'Email',
      href: 'mailto:ashishdodiya2656@gmail.com',
      icon: <FaEnvelope size={18} />,
    },
  ]

  return (
    <footer className="bg-gradient-to-t from-black to-dark pt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-10 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl" />
      
      {/* Back to top button */}
      <div className="absolute right-6 md:right-10 top-6 z-20">
        <motion.button
          className="w-12 h-12 rounded-full bg-neon-blue text-white flex items-center justify-center shadow-lg shadow-neon-blue/20 hover:bg-neon-blue/90 transition-all duration-300"
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowUp />
        </motion.button>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and description */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <motion.h2 
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="gradient-text">Ashish Dodiya</span>
              </motion.h2>
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mt-2"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
            <motion.p 
              className="text-gray-400 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full-Stack Developer with a passion for creating beautiful, functional, and user-friendly web applications. Let's build something amazing together.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                  whileHover={{ y: -5, color: '#00f5ff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <motion.h3 
              className="text-white text-lg font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Navigation
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {footerLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <motion.h3 
              className="text-white text-lg font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact
            </motion.h3>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-400">
                <span className="text-neon-blue">Email:</span> ashishdodiya2656@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-neon-blue">Phone:</span> +91 9512050130
              </p>
              <p className="text-gray-400">
                <span className="text-neon-blue">Location:</span> Porbandar, Gujarat
              </p>
            </motion.div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="inline-block text-sm text-white bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom footer */}
        <motion.div 
          className="border-t border-gray-800 mt-16 py-8 flex flex-col md:flex-row justify-between items-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Ashish Dodiya. All rights reserved.
          </p>
          
          <div className="text-gray-500 flex flex-wrap justify-center">
            <span className="px-3">
              <a href="#" className="hover:text-neon-blue transition-colors duration-300">Privacy Policy</a>
            </span>
            <span className="px-3">
              <a href="#" className="hover:text-neon-blue transition-colors duration-300">Terms of Service</a>
            </span>
            <span className="pl-3">
              <a href="#" className="hover:text-neon-blue transition-colors duration-300">Sitemap</a>
            </span>
          </div>
        </motion.div>

        {/* Credits */}
        <div className="text-center text-gray-600 text-xs pb-6">
          Crafted with ❤️ using React, Next.js, TypeScript & Tailwind CSS
        </div>
      </div>
    </footer>
  )
}

export default Footer 