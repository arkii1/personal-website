import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { fromRight } from '../../utility/springConfigs'

function Navbar() {
  const fromUpSpring = useSpring(fromRight)
  return (
    <animated.nav
      className="fixed shadow-xl w-screen bg-white flex justify-between px-4 py-2 gap-2 md:px-6 md:py-3 md:gap-3 md:justify-end lg:py-4 lg:px-8 lg:gap-5"
      style={{ zIndex: '999', ...fromUpSpring }}
    >
      <Link to="/"> Home </Link>
      <Link to="/blog">Blog</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/cv">CV</Link>
      <Link to="/contact">Contact</Link>
    </animated.nav>
  )
}

export default Navbar
