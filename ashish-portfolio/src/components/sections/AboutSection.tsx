import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaServer, FaDatabase, FaRocket } from 'react-icons/fa'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  }

  const expertiseAreas = [
    {
      title: 'MERN Stack',
      icon: <FaCode className="text-neon-blue w-6 h-6" />,
      description: 'Building scalable applications with MongoDB, Express, React, and Node.js, with a focus on reusable components and clean architecture.',
      color: 'from-blue-500/20 to-neon-blue/20',
      delay: 0.1,
    },
    {
      title: 'DSA & Competitive Coding',
      icon: <FaRocket className="text-neon-purple w-6 h-6" />,
      description: 'Solving complex problems with efficient algorithms and data structures, regularly participating in coding competitions.',
      color: 'from-purple-500/20 to-neon-purple/20',
      delay: 0.3,
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="text-neon-green w-6 h-6" />,
      description: 'Creating robust RESTful APIs, implementing authentication systems, and optimizing server performance.',
      color: 'from-green-500/20 to-neon-green/20',
      delay: 0.5,
    },
    {
      title: 'Database Design',
      icon: <FaDatabase className="text-neon-pink w-6 h-6" />,
      description: 'Designing efficient database schemas, implementing complex queries, and optimizing data storage.',
      color: 'from-pink-500/20 to-neon-pink/20',
      delay: 0.7,
    },
  ]

  return (
    <section id="about" className="py-6 pb-2 relative" ref={ref}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark z-0" />

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-6"
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            A passionate MERN stack developer and DSA enthusiast with a knack for building 
            elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Profile */}
          <motion.div
            className="flex flex-col justify-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
            <p className="text-gray-300 mb-4">
              With a background in Computer Science and a passion for web development, I've spent the last few 
              years mastering the MERN stack and building applications that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-4">
              My journey began with a fascination for algorithms and data structures, which led me to participate in 
              competitive programming contests. This foundation has given me a unique perspective on writing efficient, 
              optimized code.
            </p>
            <p className="text-gray-300">
              Now, I focus on creating seamless web experiences by combining my technical knowledge with clean, 
              intuitive design principles. I'm constantly learning and exploring new technologies to stay at the 
              forefront of web development.
            </p>
          </motion.div>

          {/* Expertise cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="glass-card p-6 rounded-xl border border-gray-800 hover:neon-border 
                bg-gradient-to-br hover:bg-gradient-to-r transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: area.delay }}
              >
                <div className="mb-4">{area.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{area.title}</h4>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div 
          className="text-center max-w-3xl mx-auto border-l-4 border-neon-purple pl-6 py-2 mb-4"
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl text-gray-300 italic">
            "I believe that well-written code is a craft that combines technical excellence with creativity and problem-solving."
          </p>
        </motion.div>
        
        {/* Visual connector to next section */}
        <div className="flex justify-center">
          <div className="w-1 h-6 bg-gradient-to-b from-neon-purple to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 