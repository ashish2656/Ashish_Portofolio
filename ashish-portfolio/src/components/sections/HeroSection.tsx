import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaCode } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  // Set animation complete after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Tech stack icons
  const techIcons = [
    { icon: <FaReact size={40} />, name: 'React', color: '#61DAFB', delay: 0 },
    { icon: <FaNodeJs size={40} />, name: 'Node.js', color: '#68A063', delay: 0.2 },
    { icon: <SiExpress size={40} />, name: 'Express', color: '#ffffff', delay: 0.4 },
    { icon: <SiMongodb size={40} />, name: 'MongoDB', color: '#4DB33D', delay: 0.6 },
    { icon: <SiTypescript size={40} />, name: 'TypeScript', color: '#3178C6', delay: 0.8 },
    { icon: <FaCode size={40} />, name: 'DSA', color: '#E34F26', delay: 1 },
  ]

  return (
    <section className="h-screen flex items-center relative overflow-hidden pt-20 w-full">
      {/* Background particles/gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark to-black z-0 w-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent opacity-60 z-0 w-screen" />
      
      {/* Grid lines for background */}
      <div 
        className="absolute inset-0 z-0 opacity-25 w-full" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          backgroundPosition: 'center center',
          width: '100vw'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center items-center">
            {/* Space for profile image */}
            <div className="flex flex-col items-center">
              <motion.div
                className="w-72 h-72 lg:w-96 lg:h-96 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue p-[3px] flex items-center justify-center mb-6 overflow-hidden"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden bg-dark flex items-center justify-center p-6">
                  <div className="code-animation text-left text-neon-blue">
                    <pre className="font-mono text-sm sm:text-base whitespace-pre-wrap">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                      >
                        <span className="text-gray-400">// Ashish Dodiya</span>
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                      >
                        <span className="text-purple-400">const</span> <span className="text-green-400">developer</span> = {"{"}
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0, duration: 0.5 }}
                      >
                        {"  "}<span className="text-blue-400">name</span>: <span className="text-yellow-300">'Ashish Dodiya'</span>,
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                      >
                        {"  "}<span className="text-blue-400">skills</span>: [
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.0, duration: 0.5 }}
                      >
                        {"    "}<span className="text-yellow-300">'MERN Stack'</span>,
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5, duration: 0.5 }}
                      >
                        {"    "}<span className="text-yellow-300">'DSA'</span>,
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.0, duration: 0.5 }}
                      >
                        {"    "}<span className="text-yellow-300">'Problem Solving'</span>
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5, duration: 0.5 }}
                      >
                        {"  "}],
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.0, duration: 0.5 }}
                      >
                        {"  "}<span className="text-blue-400">passion</span>: <span className="text-yellow-300">'Building elegant solutions'</span>
                      </motion.span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.5, duration: 0.5 }}
                      >
                        {"}"};
                      </motion.span>
                    </pre>
                  </div>
                </div>
              </motion.div>
              
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hey, I'm Ashish Dodiya—A MERN Stack Developer & DSA Enthusiast!
              </motion.h1>
            </div>
          </div>

          {/* Tech stack */}
          <motion.div 
            className="flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isAnimationComplete ? "visible" : "hidden"}
          >
            <div className="relative h-80 w-80">
              {techIcons.map((tech, index) => {
                // Calculate position in a circle
                const angle = (index * (360 / techIcons.length)) * (Math.PI / 180);
                const radius = 120;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    variants={itemVariants}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: tech.delay,
                      },
                    }}
                  >
                    <div 
                      className="p-4 rounded-full glass-card flex items-center justify-center"
                      style={{ color: tech.color, boxShadow: `0 0 15px ${tech.color}40` }}
                    >
                      {tech.icon}
                      <span className="sr-only">{tech.name}</span>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Center circle with initial */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center text-white text-2xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: isAnimationComplete ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
              >
                AD
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isAnimationComplete ? 1 : 0, y: isAnimationComplete ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <motion.div 
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-2 bg-gray-400 rounded-full mt-2"
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 