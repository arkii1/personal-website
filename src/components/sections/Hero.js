import React from 'react'
import './styles.css'
import { useSpring, animated } from 'react-spring'
import { fromLeft, fromRight } from '../../utility/springConfigs'
import Divider from '../common/Divider'
import Particle from '../common/Particle'

function Hero() {
  const leftSpring = useSpring(fromLeft)
  const rightSpring = useSpring(fromRight)

  return (
    <section
      data-src="Hero"
      className="relativeshadow-sm w-full relative bg-white"
      style={{ height: '50vh' }}
      aria-label="Hero Section"
    >
      <div
        className="w-full absolute left-1/2 top-1/2 z-50 flex justify-center"
        aria-label="Hero Content"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-max flex flex-col justify-start items-center overflow-x-hidden p-8">
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
        </div>
      </div>

      <div
        aria-label="Background image container"
        className="absolute h-full w-full bg-black/50 z-30"
      />
      <Particle />
    </section>
  )
}

export default Hero
