import React from 'react'
import './styles.css'
import { useSpring, animated } from 'react-spring'
import profilePic from '../../assets/images/profile.jpg'
import { fromLeft, fromRight, zoomIn } from '../../utility/springConfigs'
import Divider from '../common/Divider'

function About() {
  const leftSpring = useSpring(fromLeft)
  const rightSpring = useSpring(fromRight)
  const zoomInSpring = useSpring(zoomIn)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      data-src="About"
      className="h-full w-full max-w-screen-xl flex flex-col md:flex-row justify-center items-center gap-5 z-50"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start m-5">
        <animated.h3
          className="text-xl tracking-widest text-gray-500 tracking-wider	"
          style={{ ...leftSpring }}
        >
          ABOUT ME
        </animated.h3>
        <Divider colour="gray" height="1px" />
        <animated.p
          className="mt-5 text-2xl font-medium tracking-wide	"
          style={{ ...rightSpring }}
        >
          A self-taught{' '}
          <span className="text-sky-500 font-bold drop-shadow-sm">
            full-stack
          </span>{' '}
          developer. I&apos; started my career with using{' '}
          <span className="text-sky-500 font-bold drop-shadow-sm">MERN</span>{' '}
          stack, and currently employed in a fintech company using{' '}
          <span className="text-sky-500 font-bold drop-shadow-sm">
            JavaScript & .Net.
          </span>
        </animated.p>
        <animated.div
          className="w-full h-full flex flex-col justify-start items-start gap-2"
          style={{ ...rightSpring }}
        >
          <p className="mt-5 text-xl font-medium">Want to get in touch?</p>
          <button
            type="button"
            className="w-max rounded border-solid text-sky-500 font-medium tracking-widest border-sky-500 hover:bg-sky-500 hover:text-white duration-300 border-2 px-6 py-3 shadow-lg"
            onClick={scrollToContact}
          >
            Contact Me
          </button>
        </animated.div>
      </div>
      <div className="w-screen flex justify-center md:w-auto md:block m-5">
        <animated.img
          src={profilePic}
          alt=""
          className="w-full object-cover shadow-2xl z-50 rounded m-auto"
          style={{
            ...zoomInSpring,
            height: '150%',
            maxHeight: '400px',
            maxWidth: '400px',
          }}
        />
      </div>
    </section>
  )
}

export default About
