import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ContactSection from '../components/sections/ContactSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}

export default Home 