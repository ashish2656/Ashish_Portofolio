import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaWhatsapp, FaFileAlt, FaTimes, FaDownload } from 'react-icons/fa'
import { sendContactMessage, ContactFormData } from '../../services/api'

// Resume modal component
interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative max-w-5xl max-h-[90vh]"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between absolute -top-12 w-full">
              <a 
                href="/img/Reume.png" 
                download="Ashish_Dodiya_Resume.png"
                className="text-white hover:text-neon-green transition-colors flex items-center"
              >
                <FaDownload className="mr-2" />
                <span>Download Resume</span>
              </a>
              <button 
                className="text-white hover:text-neon-purple transition-colors"
                onClick={onClose}
              >
                <FaTimes size={24} />
              </button>
            </div>
            <img 
              src="/img/Reume.png" 
              alt="Ashish Dodiya Resume" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Show submitting state
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)
    
    try {
      // Send data to backend API
      const response = await sendContactMessage(formState);
      
      if (response.success) {
        setSubmitSuccess(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(response.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-neon-blue" />,
      title: 'Email',
      value: 'ashishdodiya2656@gmail.com',
      link: 'mailto:ashishdodiya2656@gmail.com',
    },
    {
      icon: <FaPhone className="text-neon-green" />,
      title: 'Phone',
      value: '+91 9512050130',
      link: 'tel:+919512050130',
    },
    {
      icon: <FaWhatsapp className="text-green-500" />,
      title: 'WhatsApp',
      value: '+91 9512050130',
      link: 'https://wa.me/919512050130',
    },
    {
      icon: <FaMapMarkerAlt className="text-neon-purple" />,
      title: 'Location',
      value: 'Porbandar, Gujarat',
      link: 'https://maps.google.com/?q=Porbandar,+Gujarat',
    },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/ashish-dodiya-645873339/',
      color: 'bg-[#0077B5] hover:bg-[#0077B5]/80',
    },
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/yourusername',
      color: 'bg-[#333] hover:bg-[#333]/80',
    },
    {
      icon: <FaTwitter size={20} />,
      url: 'https://x.com/d39739778',
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/80',
    },
    {
      icon: <FaWhatsapp size={20} />,
      url: 'https://wa.me/919512050130',
      color: 'bg-[#25D366] hover:bg-[#25D366]/80',
    },
  ]

  return (
    <section id="contact" className="py-6 relative" ref={ref}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark to-dark/95 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact information */}
          <motion.div 
            className="lg:col-span-2 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            <p className="text-gray-300">
              Feel free to reach out through any of the channels below. I typically respond within 24 hours.
            </p>

            <div className="space-y-6 mt-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-gray-700">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">{method.title}</h4>
                    <p className="text-white group-hover:text-neon-blue transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-bold text-white mb-4">Connect on Social Media</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${social.color} transition-transform duration-300`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="glass-card p-6 rounded-xl mt-8 border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h4 className="text-white font-bold mb-2">Availability</h4>
              <p className="text-gray-300">
                Currently <span className="text-neon-green font-semibold">available</span> for freelance projects and full-time opportunities. 
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Response time: Within 24 hours
              </p>
            </motion.div>

            {/* Resume button */}
            <motion.button
              className="glass-card p-6 rounded-xl mt-4 border border-gray-800 w-full flex items-center justify-between hover:border-neon-purple/50 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={openResumeModal}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-gray-700 text-neon-purple">
                  <FaFileAlt size={20} />
                </div>
                <div className="ml-4 text-left">
                  <h4 className="text-white font-bold">View Resume</h4>
                  <p className="text-gray-400 text-sm">Click to see my full resume</p>
                </div>
              </div>
              <span className="text-neon-purple group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </motion.div>

          {/* Contact form */}
          <motion.div 
            className="lg:col-span-3"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="glass-card p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 flex items-center mb-6">
                <FaPaperPlane className="text-blue-400 mr-3 text-xl flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Messages sent through this form will be delivered directly to my email - I'll respond as soon as possible!
                </p>
              </div>

              {submitSuccess && (
                <motion.div 
                  className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaPaperPlane />
                  <span>Your message has been sent successfully! I'll respond to your email shortly.</span>
                </motion.div>
              )}

              {submitError && (
                <motion.div 
                  className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Failed to send your message. Please try again or contact me directly via email.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </motion.div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent transition-all duration-300"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </section>
  )
}

export default ContactSection 