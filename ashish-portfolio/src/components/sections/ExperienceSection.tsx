import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaTrophy, FaMedal, FaCertificate, FaCode, FaLaptopCode, FaServer, FaArrowLeft, FaTimes, FaSearch, FaWindowMaximize } from 'react-icons/fa'

// Modal component for zoomed certificate view
interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificateUrl: string
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certificateUrl }) => {
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
            <button 
              className="absolute -top-12 right-0 text-white hover:text-neon-purple transition-colors"
              onClick={onClose}
            >
              <FaTimes size={24} />
            </button>
            <img 
              src={certificateUrl} 
              alt="Certificate" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface AchievementCardProps {
  title: string
  organization: string
  description: string
  icon: React.ReactNode
  color: string
  certificate?: string
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  organization,
  description,
  icon,
  color,
  certificate,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering card flip
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative h-[400px] perspective-1000">
        <motion.div
          className="w-full h-full relative preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front of card */}
          <motion.div
            className={`glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:shadow-${color}/20 border border-gray-800 hover:border-${color}/50 absolute inset-0 backface-hidden`}
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className={`h-1 w-full bg-gradient-to-r from-${color} to-${color}/50`} />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${color}/10 text-${color}`}>
                  {icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="text-gray-400">{organization}</p>
                </div>
              </div>
              <p className="text-gray-300">{description}</p>
              
              {certificate && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <button 
                    onClick={handleFlip}
                    className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors"
                  >
                    <FaCertificate className="mr-2" />
                    <span>Flip to View Certificate</span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Back of card (Certificate) */}
          {certificate && (
            <motion.div
              className="glass-card rounded-lg overflow-hidden absolute inset-0 backface-hidden rotate-y-180 p-4 flex flex-col border border-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-3">
                <button 
                  onClick={handleFlip}
                  className="text-white hover:text-neon-purple transition-colors flex items-center"
                >
                  <FaArrowLeft className="mr-2" />
                  <span>Back</span>
                </button>
                <button
                  onClick={openModal}
                  className="text-white hover:text-neon-purple transition-colors"
                  title="View Full Size"
                >
                  <FaWindowMaximize />
                </button>
              </div>
              
              <div className="flex-grow flex items-center justify-center overflow-hidden">
                <img 
                  src={certificate} 
                  alt={`${title} Certificate`}
                  className="max-w-full max-h-[300px] object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={openModal}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal for zoomed certificate view */}
      {certificate && (
        <CertificateModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          certificateUrl={certificate}
        />
      )}
    </>
  )
}

interface CodingProfileCardProps {
  platform: string
  stats: string
  url: string
  icon: React.ReactNode
  color: string
}

const CodingProfileCard: React.FC<CodingProfileCardProps> = ({
  platform,
  stats,
  url,
  icon,
  color,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card rounded-lg p-5 flex items-center hover:shadow-lg transition-all duration-300 hover:shadow-${color}/20 border border-gray-800 hover:border-${color}/50`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${color}/10 text-${color} mr-4`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{platform}</h3>
        <p className="text-gray-400">{stats}</p>
      </div>
    </motion.a>
  )
}

const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const achievements = [
    {
      title: 'Odoo x MSU Hackathon',
      organization: 'Odoo',
      description: 'Participated in the Odoo x MSU hackathon and presented the Thrive Together project, a collaborative platform built using Odoo\'s ERP framework. Developed practical skills in enterprise resource planning software and business process automation.',
      icon: <FaTrophy size={24} />,
      color: 'neon-purple',
      certificate: '/img/ODOO.png',
      // Updated on 2024-03-21 to focus on Thrive Together project
    },
    {
      title: 'Red Hat Linux 9 Course',
      organization: 'Coursera',
      description: 'Completed Red Hat Linux 9 basics course on Coursera. Learned fundamental concepts of Linux operating system, basic command line operations, file system management, and simple system administration tasks.',
      icon: <FaMedal size={24} />,
      color: 'neon-pink',
      certificate: '/img/RHEL.png',
    },
    {
      title: 'LeetCode Achievements',
      organization: 'Competitive Programming',
      description: 'Solved over 100 coding challenges on LeetCode, achieving a 2-star rating. Focused on data structures, dynamic programming, and graph algorithms to develop strong problem-solving skills.',
      icon: <FaCode size={24} />,
      color: 'neon-blue',
    },
  ]

  const codingProfiles = [
    {
      platform: 'LeetCode',
      stats: '100+ Problems Solved',
      url: 'https://leetcode.com/u/LazyCoder5151/',
      icon: <FaLaptopCode size={24} />,
      color: 'yellow-500',
    },
    {
      platform: 'CodeChef',
      stats: '2-Star Rated Competitive Programmer',
      url: 'https://www.codechef.com/users/code_manics',
      icon: <FaServer size={24} />,
      color: 'blue-400',
    },
    {
      platform: 'Codeforces',
      stats: 'Competitive Programmer',
      url: 'https://codeforces.com/profile/CodeManiacs11',
      icon: <FaCode size={24} />,
      color: 'red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="experience" className="py-16 relative" ref={ref}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark z-0" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Experience & Achievements</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            My technical achievements, certifications, and coding proficiency showcasing problem-solving skills and expertise.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              {...achievement}
            />
          ))}
        </motion.div>

        {/* Coding Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Coding Profiles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {codingProfiles.map((profile, index) => (
              <CodingProfileCard
                key={index}
                {...profile}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection 