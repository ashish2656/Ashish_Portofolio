import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  // Handle scrolling effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar appearance on scroll
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Improved active section detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      
      // Get the current scroll position
      const scrollPosition = window.scrollY;
      const navbarHeight = 100; // Approximate navbar height
      
      // Find the section that occupies most of the viewport
      let currentSectionIndex = -1;
      let maxVisibleHeight = 0;
      
      sections.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = rect.bottom + scrollPosition;
        
        // Calculate how much of the section is visible in viewport
        const visibleTop = Math.max(sectionTop, scrollPosition + navbarHeight);
        const visibleBottom = Math.min(sectionBottom, scrollPosition + window.innerHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // If this section has more visible area than previous best, select it
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          currentSectionIndex = index;
        }
        
        // Special case for first section (handle when scrolling at very top)
        if (index === 0 && scrollPosition < sectionBottom - navbarHeight * 2) {
          currentSectionIndex = 0;
        }
      });
      
      if (currentSectionIndex !== -1) {
        setActiveSection(navLinks[currentSectionIndex].id);
      }
    }

    // Throttle scroll event to improve performance
    let timeoutId: NodeJS.Timeout | null = null;
    const throttledHandleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    }
  }, [])

  // Close the mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      
      // Scroll to the section
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-dark/80 backdrop-blur-md shadow-lg' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">Ashish</span>
            <span className="gradient-text">.dev</span>
          </motion.div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)}
              className="bg-transparent border-none cursor-pointer"
            >
              <motion.div
                className={`text-lg font-medium relative ${
                  activeSection === link.id
                    ? 'gradient-text'
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue"
                    layoutId="navIndicator"
                  />
                )}
              </motion.div>
            </button>
          ))}
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ashish-dodiya-645873339/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            href="https://x.com/d39739778"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-dark border-t border-gray-800 shadow-lg md:hidden py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-lg font-medium py-2 bg-transparent border-none cursor-pointer ${
                    activeSection === link.id
                      ? 'gradient-text'
                      : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-800">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-dodiya-645873339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://x.com/d39739778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Navbar 