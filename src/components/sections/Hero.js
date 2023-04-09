import React from 'react'
import './styles.css'
import { useSpring, animated } from 'react-spring'
import { fromLeft, fromRight, fromDown } from '../../utility/springConfigs'
import Divider from '../common/Divider'
import Particle from '../common/Particle'

function Hero() {
  const leftSpring = useSpring(fromLeft)
  const rightSpring = useSpring(fromRight)
  const downSpring = useSpring(fromDown)

  const scrollToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section
      data-src="Hero"
      className="relative shadow-sm w-full bg-white h-screen"
      aria-label="Hero Section"
    >
      <div
        className="w-full absolute left-1/2 top-1/2 z-50 flex justify-center"
        aria-label="Hero Content"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-max flex flex-col justify-start items-center overflow-hidden p-8">
          <animated.h1
            className="text-white text-4xl font-medium tracking-widest"
            style={{ ...rightSpring }}
          >
            Tommy Mapp
          </animated.h1>
          <Divider />
          <animated.h2
            className="text-white text-2xl font-normal tracking-wider"
            style={{ ...leftSpring }}
          >
            Web Developer
          </animated.h2>
          <animated.button
            style={{ ...downSpring }}
            type="button"
            className="mt-6 w-max bg-white border-none outline-none border-solid text-sky-500 font-medium tracking-widest hover:bg-amber-400 hover:text-white duration-300 border-2 px-6 py-3 shadow-lg"
            onClick={scrollToAbout}
          >
            About Me
          </animated.button>
        </div>
      </div>

      <div
        aria-label="Background image container"
        className="absolute h-full w-full bg-black/10 z-30"
      />
      <Particle />
    </section>
  )
}

export default Hero
