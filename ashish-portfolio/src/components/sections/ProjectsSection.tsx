import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  live?: string
  details: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  github,
  live,
  details,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="relative w-full h-[480px] perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500 cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onClick={handleFlip}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden w-full h-full rounded-xl overflow-hidden glass-card border border-gray-800 hover:border-neon-purple/50 transition-colors duration-300">
          <div
            className="h-64 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top'
            }}
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 text-white border border-neon-purple/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-6">{description}</p>
            <div className="flex justify-between items-center">
              <button
                className="text-neon-purple hover:text-neon-blue transition-colors flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFlipped(true)
                }}
              >
                <span>View Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className="flex gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={20} />
                </a>
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full rounded-xl overflow-hidden glass-card border border-gray-800 hover:border-neon-blue/50 transition-colors duration-300">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>
            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-gray-300 mb-6 whitespace-pre-line">{details}</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-neon-blue">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {details
                    .split('\n')
                    .filter((line) => line.trim().startsWith('-'))
                    .map((line, i) => (
                      <li key={i}>{line.trim().substring(1).trim()}</li>
                    ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-neon-blue">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 text-white border border-neon-purple/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
              <button
                className="text-neon-blue hover:text-neon-purple transition-colors flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFlipped(false)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Back</span>
              </button>
              <div className="flex gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={20} />
                </a>
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: 'Thrive Together',
      description: 'Community-powered financial platform focused on helping users grow financially through savings and support networks.',
      image: '/img/Thrive.png',
      tags: ['React', 'TailwindCSS', 'JavaScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/thrive-together',
      live: 'https://thrive-together.vercel.app',
      details: `A financial community platform that helps users build stronger financial futures through collaborative savings.\n
- User-friendly financial freedom dashboard
- Community-powered savings networks
- Secure account management
- Responsive design for all device types
- Join community and savings features
- Clean, modern UI with purple gradient accents`,
    },
    {
      title: 'Uber Clone App',
      description: 'A fully functional ride-sharing application that replicates core Uber functionality with driver-rider matching.',
      image: '/img/UberClone.png',
      tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
      github: 'https://github.com/yourusername/uber-clone',
      details: `A comprehensive ride-sharing platform that replicates core Uber functionality.\n
- Real-time location tracking for drivers and riders
- Intelligent driver-rider matching algorithm
- In-app messaging between drivers and riders
- Fare calculation based on distance and time
- Rating system for both drivers and riders
- Trip history and receipts`,
    },
    {
      title: 'The Movies Hub',
      description: 'Cinematic Odyssey: Unveiling the Magic of Movies - A modern movie discovery platform with advanced search capabilities.',
      image: '/img/MoviesHub.png',
      tags: ['React', 'TailwindCSS', 'TMDB API', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/yourusername/movies-hub',
      live: 'https://movies-hub-demo.vercel.app',
      details: `A feature-rich movie discovery platform with a beautiful UI and extensive filtering options.\n
- Advanced search functionality for finding movies
- Filtering by genres, year, and sorting options
- Beautiful cinematic hero background
- Responsive design with elegant UI
- Movie details and information display
- User-friendly navigation and browsing experience`,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-6 relative" ref={ref}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark z-0" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            A selection of my recent work in web development and algorithm implementation.
            Click on any card to view more details.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <span>View more projects on GitHub</span>
            <FaGithub size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection 