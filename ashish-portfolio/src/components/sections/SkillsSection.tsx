import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaJs, FaReact, FaNodeJs, FaCode, FaJava, FaPython } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiCplusplus, SiC } from 'react-icons/si'

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Main Skills",
      skills: [
        {
          name: "MERN Stack",
          icons: [
            <FaReact key="react" className="text-blue-400" />,
            <FaNodeJs key="node" className="text-green-500" />,
            <SiExpress key="express" className="text-white" />,
            <SiMongodb key="mongodb" className="text-green-600" />
          ],
          description: "Building robust full-stack applications with MongoDB, Express, React, and Node.js"
        },
        {
          name: "DSA & Competitive Programming",
          icons: [<FaCode key="code" className="text-neon-green" />],
          description: "Solved more than 100 codes in CodeChef, CodeForces and LeetCode, regularly participating in coding contests"
        }
      ],
      color: "from-neon-purple to-neon-blue"
    },
    {
      title: "Intermediate",
      skills: [
        {
          name: "C++",
          icons: [<SiCplusplus key="cpp" className="text-blue-500" />],
          description: "OOP, STL, and algorithm implementation for competitive programming"
        },
        {
          name: "C",
          icons: [<SiC key="c" className="text-blue-600" />],
          description: "Systems programming and memory management"
        },
        {
          name: "Python",
          icons: [<FaPython key="python" className="text-yellow-500" />],
          description: "Data analysis, scripting, and automation" 
        },
        {
          name: "Java",
          icons: [<FaJava key="java" className="text-red-500" />],
          description: "Object-oriented programming and application development"
        }
      ],
      color: "from-neon-blue to-neon-green"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  }

  return (
    <section id="skills" className="py-6 pt-2 relative" ref={ref}>
      {/* Background with a subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-dark/80" />
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #555 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-6"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            My expertise spans across frontend, backend, databases, and algorithms
          </p>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-16 left-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-2xl -z-10"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-2xl -z-10"></div>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="mb-4" 
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <h3 className={`text-xl font-bold mr-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className={`h-0.5 flex-grow bg-gradient-to-r ${category.color} opacity-30 rounded-full`}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card p-5 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300"
                    whileHover={{ y: -5, x: 0 }}
                    variants={itemVariants}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                      <div className="flex space-x-2">
                        {skill.icons.map((icon, i) => (
                          <div key={i} className="text-xl">
                            {icon}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently learning section */}
        <motion.div 
          className="mt-8 glass-card p-6 rounded-xl border border-gray-800"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">Currently Exploring</h3>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-full border border-neon-purple/20 text-white">
              Cyber Security
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-neon-blue/10 to-neon-green/10 rounded-full border border-neon-blue/20 text-white">
              Machine Learning
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-neon-green/10 to-neon-pink/10 rounded-full border border-neon-green/20 text-white">
              Artificial Intelligence
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection 