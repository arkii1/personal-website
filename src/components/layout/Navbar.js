import React from 'react'
import './styles.css'
import { useSpring, animated } from 'react-spring'
import { fromUp } from '../../utility/springConfigs'

function Navbar() {
  const fromUpSpring = useSpring(fromUp)

  const scrollToHome = () => {
    const element = document.getElementById('home')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <animated.nav
      className="bg-white fixed shadow-xl w-screen bg-white flex justify-between px-4 py-2 gap-2 md:px-6 md:py-3 md:gap-3 md:justify-end lg:py-4 lg:px-8 lg:gap-5"
      style={{ zIndex: '999', ...fromUpSpring }}
    >
      <button
        className="hover:underline underline-offset-8"
        type="button"
        onClick={scrollToHome}
      >
        Home
      </button>
      <button
        className="hover:underline underline-offset-8"
        type="button"
        onClick={scrollToContact}
      >
        Contact
      </button>
    </animated.nav>
  )
}

export default Navbar
